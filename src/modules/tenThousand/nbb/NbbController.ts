import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbbs")
export default class NbbController {
  @operation({
    summary: "Get Nbbs",
  })
  @get()
  static getNbbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbb",
  })
  @post("{id}")
  static createNbb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
