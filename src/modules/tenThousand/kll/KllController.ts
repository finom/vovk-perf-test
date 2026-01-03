import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klls")
export default class KllController {
  @operation({
    summary: "Get Klls",
  })
  @get()
  static getKlls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kll",
  })
  @post("{id}")
  static createKll = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
