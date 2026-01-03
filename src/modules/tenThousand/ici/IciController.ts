import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icis")
export default class IciController {
  @operation({
    summary: "Get Icis",
  })
  @get()
  static getIcis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ici",
  })
  @post("{id}")
  static createIci = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
