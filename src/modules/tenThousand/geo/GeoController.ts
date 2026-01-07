import { procedure, prefix, get, post, operation } from "vovk";

@prefix("geo")
export default class GeoController {
  @operation({
    summary: "Get Geo",
  })
  @get()
  static getGeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Geo",
  })
  @post("{id}")
  static createGeo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
