import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgf")
export default class HgfController {
  @operation({
    summary: "Get Hgf",
  })
  @get()
  static getHgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgf",
  })
  @post("{id}")
  static createHgf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
