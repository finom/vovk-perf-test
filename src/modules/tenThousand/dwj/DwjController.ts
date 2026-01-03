import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwjs")
export default class DwjController {
  @operation({
    summary: "Get Dwjs",
  })
  @get()
  static getDwjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwj",
  })
  @post("{id}")
  static createDwj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
