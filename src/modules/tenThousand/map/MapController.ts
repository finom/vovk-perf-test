import { procedure, prefix, get, post, operation } from "vovk";

@prefix("map")
export default class MapController {
  @operation({
    summary: "Get Map",
  })
  @get()
  static getMap = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Map",
  })
  @post("{id}")
  static createMap = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
