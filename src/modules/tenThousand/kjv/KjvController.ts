import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjvs")
export default class KjvController {
  @operation({
    summary: "Get Kjvs",
  })
  @get()
  static getKjvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjv",
  })
  @post("{id}")
  static createKjv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
