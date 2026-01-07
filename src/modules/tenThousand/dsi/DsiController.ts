import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsi")
export default class DsiController {
  @operation({
    summary: "Get Dsi",
  })
  @get()
  static getDsi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsi",
  })
  @post("{id}")
  static createDsi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
