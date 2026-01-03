import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdrs")
export default class FdrController {
  @operation({
    summary: "Get Fdrs",
  })
  @get()
  static getFdrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdr",
  })
  @post("{id}")
  static createFdr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
