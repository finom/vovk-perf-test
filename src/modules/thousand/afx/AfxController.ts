import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afxes")
export default class AfxController {
  @operation({
    summary: "Get Afxes",
  })
  @get()
  static getAfxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afx",
  })
  @post("{id}")
  static createAfx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
