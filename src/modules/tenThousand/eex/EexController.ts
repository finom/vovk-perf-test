import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eex")
export default class EexController {
  @operation({
    summary: "Get Eex",
  })
  @get()
  static getEex = procedure({
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
