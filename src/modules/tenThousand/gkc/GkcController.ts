import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkc")
export default class GkcController {
  @operation({
    summary: "Get Gkc",
  })
  @get()
  static getGkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkc",
  })
  @post("{id}")
  static createGkc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
