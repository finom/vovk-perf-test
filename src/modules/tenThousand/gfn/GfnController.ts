import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfn")
export default class GfnController {
  @operation({
    summary: "Get Gfn",
  })
  @get()
  static getGfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfn",
  })
  @post("{id}")
  static createGfn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
