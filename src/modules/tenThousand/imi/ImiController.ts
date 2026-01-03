import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imis")
export default class ImiController {
  @operation({
    summary: "Get Imis",
  })
  @get()
  static getImis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imi",
  })
  @post("{id}")
  static createImi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
