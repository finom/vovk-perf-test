import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmus")
export default class DmuController {
  @operation({
    summary: "Get Dmus",
  })
  @get()
  static getDmus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmu",
  })
  @post("{id}")
  static createDmu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
