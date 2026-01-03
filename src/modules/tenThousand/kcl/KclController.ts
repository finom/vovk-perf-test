import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcls")
export default class KclController {
  @operation({
    summary: "Get Kcls",
  })
  @get()
  static getKcls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcl",
  })
  @post("{id}")
  static createKcl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
