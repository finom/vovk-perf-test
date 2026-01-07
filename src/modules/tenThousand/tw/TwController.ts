import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tw")
export default class TwController {
  @operation({
    summary: "Get Tw",
  })
  @get()
  static getTw = procedure({
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
