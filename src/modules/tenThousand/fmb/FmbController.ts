import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmb")
export default class FmbController {
  @operation({
    summary: "Get Fmb",
  })
  @get()
  static getFmb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmb",
  })
  @post("{id}")
  static createFmb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
