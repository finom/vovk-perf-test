import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lat")
export default class LatController {
  @operation({
    summary: "Get Lat",
  })
  @get()
  static getLat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lat",
  })
  @post("{id}")
  static createLat = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
