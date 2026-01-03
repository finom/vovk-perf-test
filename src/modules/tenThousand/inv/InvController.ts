import { procedure, prefix, get, post, operation } from "vovk";

@prefix("invs")
export default class InvController {
  @operation({
    summary: "Get Invs",
  })
  @get()
  static getInvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inv",
  })
  @post("{id}")
  static createInv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
