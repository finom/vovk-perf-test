import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eha")
export default class EhaController {
  @operation({
    summary: "Get Eha",
  })
  @get()
  static getEha = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eha",
  })
  @post("{id}")
  static createEha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
