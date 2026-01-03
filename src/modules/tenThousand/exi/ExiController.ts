import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exis")
export default class ExiController {
  @operation({
    summary: "Get Exis",
  })
  @get()
  static getExis = procedure({
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
