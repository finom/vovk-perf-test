import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gf")
export default class GfController {
  @operation({
    summary: "Get Gf",
  })
  @get()
  static getGf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gf",
  })
  @post("{id}")
  static createGf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
