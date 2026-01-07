import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwc")
export default class DwcController {
  @operation({
    summary: "Get Dwc",
  })
  @get()
  static getDwc = procedure({
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
