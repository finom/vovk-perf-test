import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exi")
export default class ExiController {
  @operation({
    summary: "Get Exi",
  })
  @get()
  static getExi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exi",
  })
  @post("{id}")
  static createExi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
