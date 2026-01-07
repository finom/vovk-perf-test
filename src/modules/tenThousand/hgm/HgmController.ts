import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgm")
export default class HgmController {
  @operation({
    summary: "Get Hgm",
  })
  @get()
  static getHgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgm",
  })
  @post("{id}")
  static createHgm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
