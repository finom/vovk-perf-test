import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exa")
export default class ExaController {
  @operation({
    summary: "Get Exa",
  })
  @get()
  static getExa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exa",
  })
  @post("{id}")
  static createExa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
