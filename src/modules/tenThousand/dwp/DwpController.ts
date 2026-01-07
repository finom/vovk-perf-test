import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwp")
export default class DwpController {
  @operation({
    summary: "Get Dwp",
  })
  @get()
  static getDwp = procedure({
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
