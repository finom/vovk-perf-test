import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvgs")
export default class FvgController {
  @operation({
    summary: "Get Fvgs",
  })
  @get()
  static getFvgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvg",
  })
  @post("{id}")
  static createFvg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
