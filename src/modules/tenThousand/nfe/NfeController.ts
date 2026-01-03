import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfes")
export default class NfeController {
  @operation({
    summary: "Get Nfes",
  })
  @get()
  static getNfes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfe",
  })
  @post("{id}")
  static createNfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
