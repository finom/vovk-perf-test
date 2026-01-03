import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfas")
export default class LfaController {
  @operation({
    summary: "Get Lfas",
  })
  @get()
  static getLfas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfa",
  })
  @post("{id}")
  static createLfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
