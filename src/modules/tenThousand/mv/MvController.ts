import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mv")
export default class MvController {
  @operation({
    summary: "Get Mv",
  })
  @get()
  static getMv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mv",
  })
  @post("{id}")
  static createMv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
