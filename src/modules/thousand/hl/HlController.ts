import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hl")
export default class HlController {
  @operation({
    summary: "Get Hl",
  })
  @get()
  static getHl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hl",
  })
  @post("{id}")
  static createHl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
