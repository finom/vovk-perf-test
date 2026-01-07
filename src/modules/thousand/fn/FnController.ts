import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fn")
export default class FnController {
  @operation({
    summary: "Get Fn",
  })
  @get()
  static getFn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fn",
  })
  @post("{id}")
  static createFn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
