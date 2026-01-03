import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etns")
export default class EtnController {
  @operation({
    summary: "Get Etns",
  })
  @get()
  static getEtns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etn",
  })
  @post("{id}")
  static createEtn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
