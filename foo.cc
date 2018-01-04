#include <unistd.h>
void foo() {
  sleep(30);
}

#include "nbind/nbind.h"
NBIND_GLOBAL() {
  function(foo);
}