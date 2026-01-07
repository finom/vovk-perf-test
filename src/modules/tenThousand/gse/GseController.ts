import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gse")
export default class GseController {
  @operation({
    summary: "Get Gse",
  })
  @get()
  static getGse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gse",
  })
  @post("{id}")
  static createGse = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
