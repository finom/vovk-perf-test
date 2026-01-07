import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpa")
export default class KpaController {
  @operation({
    summary: "Get Kpa",
  })
  @get()
  static getKpa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpa",
  })
  @post("{id}")
  static createKpa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
