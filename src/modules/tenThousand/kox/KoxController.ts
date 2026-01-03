import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koxen")
export default class KoxController {
  @operation({
    summary: "Get Koxen",
  })
  @get()
  static getKoxen = procedure({
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
