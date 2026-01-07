import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebi")
export default class EbiController {
  @operation({
    summary: "Get Ebi",
  })
  @get()
  static getEbi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebi",
  })
  @post("{id}")
  static createEbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
