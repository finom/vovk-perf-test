import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgd")
export default class HgdController {
  @operation({
    summary: "Get Hgd",
  })
  @get()
  static getHgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgd",
  })
  @post("{id}")
  static createHgd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
