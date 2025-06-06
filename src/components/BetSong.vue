<script setup lang="ts">

import { ref } from 'vue';
import type { Song } from '../@types/basbet';

const emit = defineEmits<{
  delete: []
}>();

defineProps<{
	index: number,
	finished: boolean,
	locked: boolean,
	song: Song
}>();

const deleteSong = () => {
	emit('delete');
};

const publicPath = ref<string>('/');
	
</script>

<template>
	<div 
		class="songs__song song" 
		:class="{ 'song--locked': locked }"
	>
		<div class="song__country">
			<img 
				class="song__flag" 
				:src="publicPath + 'flags/' + song.countryCode + '.svg'" 
				width="30" 
				height="20" 
				:alt="'Flag of ' + song.country" 
				:title="song.country" 
			>
			
		</div>
		<span 
				class="song__countrycode" 
				:title="song.country"
			>
				{{ song.country }}
			</span>
			<div class="song__artist">
			{{ song.artist }}
		</div>
		<h3 class="song__title">
			{{ song.title }} 
			<span 
				class="song__points" 
				v-if="locked"
			>
				{{ song.points }}
			</span>
		</h3>
		
		<div 
			class="song__rank" 
			:class="{ 'song__rank--locked': locked }"
		>
			{{ index + 1 }}
		</div>
		<button 
			class="song__delete" 
			v-if="!locked" 
			@click="deleteSong" 
			title="Remove song"
		>
			&times;
		</button>
	</div>
</template>

<style lang="scss">

.song {
	position: relative;
	padding: .5rem;
	background: linear-gradient(135deg, rgba(255,255,255,.9) 0, rgba(255,255,255,.4) 100%);
	box-shadow: 0 0 1rem rgba(0,0,0,0.5);
	margin: 0 0 .5rem 0;
	border-radius: .2rem;
	cursor: e-move;
	cursor: e-resize;

	&:focus, &:hover {
		background: linear-gradient(135deg, #fff 0, #aaa 100%);
	}
	&--locked {
		cursor: default!important;
		background: linear-gradient(135deg, rgba(255,255,255,.9) 0, rgba(255,255,255,.4) 100%)!important;
		pointer-events: none;

		& * {
			pointer-events: none;
			user-select: none;
		}
	}
	.player & {
		cursor: ns-resize;
	}
	.songs & .song__delete {
		display: none;
	}
	&__country {
		display: flex;
		flex-direction: column;
		float: right;
		margin: 0 0 0 .8rem;
		text-align: center;
		.player & {
			float: left;
			margin: 0 .8rem 0 0;
		}
	}
	&__flag {
		width: 36px;
		height: auto;
	}
	&__countrycode {
		
		display: block;
		margin-top: .1rem;
		font-size: .8rem;
		font-weight: bold;
	}
	&__title {
		font-weight: 200;
		text-overflow: ellipsis;
		overflow: hidden;
		width: calc(100% - 3.5rem);
		white-space: nowrap;
		.player & {
			margin-left: 3.1rem;
		}
		
	}
	&__artist {
		text-overflow: ellipsis;
		overflow: hidden;
		width: calc(100% - 3.5rem);
		white-space: nowrap;
		font-weight: 400;
	}
	
	&__order {
		display: none;
	}
	&__points {
		background: rgba(0,0,0,0.3);
		color: #fff;
		font-size: .7rem;
		padding: .08em .5em;
		border-radius: 2em;
		position: relative;
		top: -.1em;
		margin-left: .2em;

		.player & {
			display: none;
		}
		
	}
	&__rank {
		font-weight: 100;
		position: absolute;
		top: .12rem;
		right: 3.5rem;
		letter-spacing: -.05em;
		z-index: 0;
		font-size: 3.2rem;
		line-height: 1;
		color: rgba(0,0,0,0.2);
		.player & {
			right: 1.6rem;
			&--locked {
				right: .7rem;
			}
		}

	}
	&__delete {
		background: none;
		border: none;
		font-weight: 100;
		position: absolute;
		right: .3rem;
		top: .3rem;
		line-height: .5;
		font-size: 1.7rem;
		cursor: pointer;
		outline: none;
		&:hover {
			font-weight: 400;
		}
	}
	&.sortable-ghost {
		background: none;
		box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);
		& * {
			opacity: 0;
		}
	}

}

</style>
