import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goks")
export default class GokController {
  @operation({
    summary: "Get Goks",
  })
  @get()
  static getGoks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gok",
  })
  @post("{id}")
  static createGok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
