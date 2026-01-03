import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wns")
export default class WnController {
  @operation({
    summary: "Get Wns",
  })
  @get()
  static getWns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wn",
  })
  @post("{id}")
  static createWn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
