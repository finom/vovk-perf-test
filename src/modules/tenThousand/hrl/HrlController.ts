import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrl")
export default class HrlController {
  @operation({
    summary: "Get Hrl",
  })
  @get()
  static getHrl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrl",
  })
  @post("{id}")
  static createHrl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
