import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmbs")
export default class FmbController {
  @operation({
    summary: "Get Fmbs",
  })
  @get()
  static getFmbs = procedure({
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
