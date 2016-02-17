<?php get_header(); ?>

  <div class="row">
    <div class="columns">

      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

        <article id="post-<?php the_ID(); ?>" <?php post_class(''); ?>>

        	<header class="post-header">
        		<h2 class="post-title"><a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
        	</header>

        	<section class="post-content">
        		<?php the_excerpt(); ?>
        	</section>

        	<footer class="post-footer">
            <p class="tags"><?php the_tags(); ?></p>
        	</footer>

        </article>

      <?php endwhile; else : ?>
        <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
      <?php endif; ?>

    </div>
  </div>

<?php get_footer(); ?>
