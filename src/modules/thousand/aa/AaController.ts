import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aa")
export default class AaController {
  @operation({
    summary: "Get Aa",
  })
  @get()
  static getAa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aa",
  })
  @post("{id}")
  static createAa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
