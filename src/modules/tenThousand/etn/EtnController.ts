import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etn")
export default class EtnController {
  @operation({
    summary: "Get Etn",
  })
  @get()
  static getEtn = procedure({
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
