import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcl")
export default class KclController {
  @operation({
    summary: "Get Kcl",
  })
  @get()
  static getKcl = procedure({
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
