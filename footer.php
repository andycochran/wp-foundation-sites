    </div><!-- end .site-container -->

    <footer class="site-footer">
      <div class="row">
      	<div class="columns">
          <p>
        		<?php printf(__('%1$s is proudly powered by %2$s'), get_bloginfo('name'),
        		'<a href="https://wordpress.org/">WordPress</a>'); ?>
        		<br /><?php printf(__('%1$s and %2$s.'), '<a href="' . get_bloginfo('rss2_url') . '">' . __('Entries (RSS)') . '</a>', '<a href="' . get_bloginfo('comments_rss2_url') . '">' . __('Comments (RSS)') . '</a>'); ?>
        		<!-- <?php printf(__('%d queries. %s seconds.'), get_num_queries(), timer_stop(0, 3)); ?> -->
        	</p>
        </div>
      </div>
    </footer>

    <?php wp_footer(); ?>

  </body>
</html>
