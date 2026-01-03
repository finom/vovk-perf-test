import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eexes")
export default class EexController {
  @operation({
    summary: "Get Eexes",
  })
  @get()
  static getEexes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eex",
  })
  @post("{id}")
  static createEex = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
