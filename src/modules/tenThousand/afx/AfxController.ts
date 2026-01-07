import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afx")
export default class AfxController {
  @operation({
    summary: "Get Afx",
  })
  @get()
  static getAfx = procedure({
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
