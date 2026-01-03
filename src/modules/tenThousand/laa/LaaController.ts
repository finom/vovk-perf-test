import { procedure, prefix, get, post, operation } from "vovk";

@prefix("laas")
export default class LaaController {
  @operation({
    summary: "Get Laas",
  })
  @get()
  static getLaas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Laa",
  })
  @post("{id}")
  static createLaa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
