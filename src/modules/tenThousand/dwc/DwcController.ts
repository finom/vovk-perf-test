import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwcs")
export default class DwcController {
  @operation({
    summary: "Get Dwcs",
  })
  @get()
  static getDwcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwc",
  })
  @post("{id}")
  static createDwc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
