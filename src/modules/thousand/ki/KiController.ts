import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kis")
export default class KiController {
  @operation({
    summary: "Get Kis",
  })
  @get()
  static getKis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ki",
  })
  @post("{id}")
  static createKi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
