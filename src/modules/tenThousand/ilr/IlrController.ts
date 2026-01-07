import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilr")
export default class IlrController {
  @operation({
    summary: "Get Ilr",
  })
  @get()
  static getIlr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilr",
  })
  @post("{id}")
  static createIlr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
