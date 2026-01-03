import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tws")
export default class TwController {
  @operation({
    summary: "Get Tws",
  })
  @get()
  static getTws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tw",
  })
  @post("{id}")
  static createTw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
