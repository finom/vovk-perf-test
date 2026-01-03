import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqts")
export default class NqtController {
  @operation({
    summary: "Get Nqts",
  })
  @get()
  static getNqts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqt",
  })
  @post("{id}")
  static createNqt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
