import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmgs")
export default class NmgController {
  @operation({
    summary: "Get Nmgs",
  })
  @get()
  static getNmgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmg",
  })
  @post("{id}")
  static createNmg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
