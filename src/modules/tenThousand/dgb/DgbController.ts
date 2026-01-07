import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgb")
export default class DgbController {
  @operation({
    summary: "Get Dgb",
  })
  @get()
  static getDgb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgb",
  })
  @post("{id}")
  static createDgb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
