import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mww")
export default class MwwController {
  @operation({
    summary: "Get Mww",
  })
  @get()
  static getMww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mww",
  })
  @post("{id}")
  static createMww = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
