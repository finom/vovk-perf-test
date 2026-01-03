import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxas")
export default class LxaController {
  @operation({
    summary: "Get Lxas",
  })
  @get()
  static getLxas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxa",
  })
  @post("{id}")
  static createLxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
