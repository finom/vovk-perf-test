import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwg")
export default class MwgController {
  @operation({
    summary: "Get Mwg",
  })
  @get()
  static getMwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwg",
  })
  @post("{id}")
  static createMwg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
