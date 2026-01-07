import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwv")
export default class DwvController {
  @operation({
    summary: "Get Dwv",
  })
  @get()
  static getDwv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwv",
  })
  @post("{id}")
  static createDwv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
