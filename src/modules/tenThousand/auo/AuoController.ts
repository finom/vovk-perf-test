import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auo")
export default class AuoController {
  @operation({
    summary: "Get Auo",
  })
  @get()
  static getAuo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Auo",
  })
  @post("{id}")
  static createAuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
