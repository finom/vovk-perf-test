import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbi")
export default class NbiController {
  @operation({
    summary: "Get Nbi",
  })
  @get()
  static getNbi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbi",
  })
  @post("{id}")
  static createNbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
