import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbis")
export default class CbiController {
  @operation({
    summary: "Get Cbis",
  })
  @get()
  static getCbis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbi",
  })
  @post("{id}")
  static createCbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
