import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krgs")
export default class KrgController {
  @operation({
    summary: "Get Krgs",
  })
  @get()
  static getKrgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krg",
  })
  @post("{id}")
  static createKrg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
