import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmg")
export default class NmgController {
  @operation({
    summary: "Get Nmg",
  })
  @get()
  static getNmg = procedure({
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
