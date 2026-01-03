import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgs")
export default class FgController {
  @operation({
    summary: "Get Fgs",
  })
  @get()
  static getFgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fg",
  })
  @post("{id}")
  static createFg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
