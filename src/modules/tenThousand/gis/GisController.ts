import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gis")
export default class GisController {
  @operation({
    summary: "Get Gis",
  })
  @get()
  static getGis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gis",
  })
  @post("{id}")
  static createGis = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
