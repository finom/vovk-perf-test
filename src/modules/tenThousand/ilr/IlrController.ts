import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilrs")
export default class IlrController {
  @operation({
    summary: "Get Ilrs",
  })
  @get()
  static getIlrs = procedure({
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
