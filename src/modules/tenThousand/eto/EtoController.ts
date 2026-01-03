import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etos")
export default class EtoController {
  @operation({
    summary: "Get Etos",
  })
  @get()
  static getEtos = procedure({
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
