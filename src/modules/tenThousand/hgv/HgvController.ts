import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgv")
export default class HgvController {
  @operation({
    summary: "Get Hgv",
  })
  @get()
  static getHgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgv",
  })
  @post("{id}")
  static createHgv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
