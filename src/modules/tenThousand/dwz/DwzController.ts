import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwz")
export default class DwzController {
  @operation({
    summary: "Get Dwz",
  })
  @get()
  static getDwz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwz",
  })
  @post("{id}")
  static createDwz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
