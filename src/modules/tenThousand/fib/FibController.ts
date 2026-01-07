import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fib")
export default class FibController {
  @operation({
    summary: "Get Fib",
  })
  @get()
  static getFib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fib",
  })
  @post("{id}")
  static createFib = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
