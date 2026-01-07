import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grd")
export default class GrdController {
  @operation({
    summary: "Get Grd",
  })
  @get()
  static getGrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grd",
  })
  @post("{id}")
  static createGrd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
