import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwbs")
export default class DwbController {
  @operation({
    summary: "Get Dwbs",
  })
  @get()
  static getDwbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwb",
  })
  @post("{id}")
  static createDwb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
