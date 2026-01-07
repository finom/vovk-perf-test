import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlv")
export default class HlvController {
  @operation({
    summary: "Get Hlv",
  })
  @get()
  static getHlv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlv",
  })
  @post("{id}")
  static createHlv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
