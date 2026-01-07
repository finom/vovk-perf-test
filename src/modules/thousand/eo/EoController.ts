import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eo")
export default class EoController {
  @operation({
    summary: "Get Eo",
  })
  @get()
  static getEo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eo",
  })
  @post("{id}")
  static createEo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
