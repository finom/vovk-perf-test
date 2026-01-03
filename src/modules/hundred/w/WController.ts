import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ws")
export default class WController {
  @operation({
    summary: "Get WS",
  })
  @get()
  static getWS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create W",
  })
  @post("{id}")
  static createW = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
