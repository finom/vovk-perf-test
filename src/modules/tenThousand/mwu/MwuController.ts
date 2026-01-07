import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwu")
export default class MwuController {
  @operation({
    summary: "Get Mwu",
  })
  @get()
  static getMwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwu",
  })
  @post("{id}")
  static createMwu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
