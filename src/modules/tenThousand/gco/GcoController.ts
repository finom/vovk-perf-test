import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gco")
export default class GcoController {
  @operation({
    summary: "Get Gco",
  })
  @get()
  static getGco = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gco",
  })
  @post("{id}")
  static createGco = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
