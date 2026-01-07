import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpd")
export default class GpdController {
  @operation({
    summary: "Get Gpd",
  })
  @get()
  static getGpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpd",
  })
  @post("{id}")
  static createGpd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
