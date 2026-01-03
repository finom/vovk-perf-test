import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doks")
export default class DokController {
  @operation({
    summary: "Get Doks",
  })
  @get()
  static getDoks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dok",
  })
  @post("{id}")
  static createDok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
