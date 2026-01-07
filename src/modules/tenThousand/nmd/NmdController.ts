import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmd")
export default class NmdController {
  @operation({
    summary: "Get Nmd",
  })
  @get()
  static getNmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmd",
  })
  @post("{id}")
  static createNmd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
