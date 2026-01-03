import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwls")
export default class DwlController {
  @operation({
    summary: "Get Dwls",
  })
  @get()
  static getDwls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwl",
  })
  @post("{id}")
  static createDwl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
