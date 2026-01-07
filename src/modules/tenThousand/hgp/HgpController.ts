import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgp")
export default class HgpController {
  @operation({
    summary: "Get Hgp",
  })
  @get()
  static getHgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgp",
  })
  @post("{id}")
  static createHgp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
