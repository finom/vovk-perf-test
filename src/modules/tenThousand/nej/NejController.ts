import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nejs")
export default class NejController {
  @operation({
    summary: "Get Nejs",
  })
  @get()
  static getNejs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nej",
  })
  @post("{id}")
  static createNej = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
