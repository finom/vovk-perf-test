import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwps")
export default class DwpController {
  @operation({
    summary: "Get Dwps",
  })
  @get()
  static getDwps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwp",
  })
  @post("{id}")
  static createDwp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
