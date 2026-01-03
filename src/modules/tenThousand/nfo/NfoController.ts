import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfos")
export default class NfoController {
  @operation({
    summary: "Get Nfos",
  })
  @get()
  static getNfos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfo",
  })
  @post("{id}")
  static createNfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
