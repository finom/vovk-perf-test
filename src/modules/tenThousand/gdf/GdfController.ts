import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdf")
export default class GdfController {
  @operation({
    summary: "Get Gdf",
  })
  @get()
  static getGdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdf",
  })
  @post("{id}")
  static createGdf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
