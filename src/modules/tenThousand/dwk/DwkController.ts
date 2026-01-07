import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwk")
export default class DwkController {
  @operation({
    summary: "Get Dwk",
  })
  @get()
  static getDwk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwk",
  })
  @post("{id}")
  static createDwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
