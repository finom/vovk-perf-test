import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcos")
export default class HcoController {
  @operation({
    summary: "Get Hcos",
  })
  @get()
  static getHcos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hco",
  })
  @post("{id}")
  static createHco = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
