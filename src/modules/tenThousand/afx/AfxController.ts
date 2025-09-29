import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afxes")
export default class AfxController {
  @operation({
    summary: "Get Afxes",
  })
  @get()
  static getAfxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afx",
  })
  @post("{id}")
  static createAfx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
