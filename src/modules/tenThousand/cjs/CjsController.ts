import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjs")
export default class CjsController {
  @operation({
    summary: "Get Cjs",
  })
  @get()
  static getCjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjs",
  })
  @post("{id}")
  static createCjs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
