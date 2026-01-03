import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsps")
export default class HspController {
  @operation({
    summary: "Get Hsps",
  })
  @get()
  static getHsps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsp",
  })
  @post("{id}")
  static createHsp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
