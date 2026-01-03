import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chis")
export default class ChiController {
  @operation({
    summary: "Get Chis",
  })
  @get()
  static getChis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chi",
  })
  @post("{id}")
  static createChi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
