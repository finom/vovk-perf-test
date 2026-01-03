import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njts")
export default class NjtController {
  @operation({
    summary: "Get Njts",
  })
  @get()
  static getNjts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njt",
  })
  @post("{id}")
  static createNjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
