import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gazs")
export default class GazController {
  @operation({
    summary: "Get Gazs",
  })
  @get()
  static getGazs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gaz",
  })
  @post("{id}")
  static createGaz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
