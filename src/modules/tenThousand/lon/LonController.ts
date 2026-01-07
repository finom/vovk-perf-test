import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lon")
export default class LonController {
  @operation({
    summary: "Get Lon",
  })
  @get()
  static getLon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lon",
  })
  @post("{id}")
  static createLon = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
