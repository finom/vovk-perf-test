import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmd")
export default class LmdController {
  @operation({
    summary: "Get Lmd",
  })
  @get()
  static getLmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmd",
  })
  @post("{id}")
  static createLmd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
