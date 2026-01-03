import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kshes")
export default class KshController {
  @operation({
    summary: "Get Kshes",
  })
  @get()
  static getKshes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksh",
  })
  @post("{id}")
  static createKsh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
