import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmas")
export default class NmaController {
  @operation({
    summary: "Get Nmas",
  })
  @get()
  static getNmas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nma",
  })
  @post("{id}")
  static createNma = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
