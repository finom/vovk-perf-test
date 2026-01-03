import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfis")
export default class NfiController {
  @operation({
    summary: "Get Nfis",
  })
  @get()
  static getNfis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfi",
  })
  @post("{id}")
  static createNfi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
