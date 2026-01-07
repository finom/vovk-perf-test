import { procedure, prefix, get, post, operation } from "vovk";

@prefix("map")
export default class MapController {
  @operation({
    summary: "Get Map",
  })
  @get()
  static getMap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Map",
  })
  @post("{id}")
  static createMap = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
