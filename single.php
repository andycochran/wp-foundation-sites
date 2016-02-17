<?php get_header(); ?>

  <div class="row">
    <div class="columns">

      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

        <article id="post-<?php the_ID(); ?>" <?php post_class(''); ?>>

          <header class="post-header">
            <h1 class="post-title single-title"><?php the_title(); ?></h1>
            <p class="post-byline"><?php the_time('F j, Y') ?> | <?php the_author_posts_link(); ?> | <?php the_category(', ') ?></p>
          </header>

          <section class="post-content">
            <?php the_content(); ?>
          </section>

          <footer class="post-footer">
            <p class="post-tags"><?php the_tags(); ?></p>
          </footer>

          <div class="post-comments">
            <?php comments_template(); ?>
          </div>

        </article>

      <?php endwhile; endif; ?>

    </div>
  </div>

<?php get_footer(); ?>
