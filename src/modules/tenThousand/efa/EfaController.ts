import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efa")
export default class EfaController {
  @operation({
    summary: "Get Efa",
  })
  @get()
  static getEfa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efa",
  })
  @post("{id}")
  static createEfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
