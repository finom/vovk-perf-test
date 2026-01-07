import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eto")
export default class EtoController {
  @operation({
    summary: "Get Eto",
  })
  @get()
  static getEto = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eto",
  })
  @post("{id}")
  static createEto = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
