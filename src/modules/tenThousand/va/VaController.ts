import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vas")
export default class VaController {
  @operation({
    summary: "Get Vas",
  })
  @get()
  static getVas = procedure({
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
