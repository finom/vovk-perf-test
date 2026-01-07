import { procedure, prefix, get, post, operation } from "vovk";

@prefix("va")
export default class VaController {
  @operation({
    summary: "Get Va",
  })
  @get()
  static getVa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Va",
  })
  @post("{id}")
  static createVa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
