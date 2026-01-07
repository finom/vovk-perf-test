import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kox")
export default class KoxController {
  @operation({
    summary: "Get Kox",
  })
  @get()
  static getKox = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kox",
  })
  @post("{id}")
  static createKox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
