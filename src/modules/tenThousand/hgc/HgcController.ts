import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgc")
export default class HgcController {
  @operation({
    summary: "Get Hgc",
  })
  @get()
  static getHgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgc",
  })
  @post("{id}")
  static createHgc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
