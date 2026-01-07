import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajt")
export default class AjtController {
  @operation({
    summary: "Get Ajt",
  })
  @get()
  static getAjt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajt",
  })
  @post("{id}")
  static createAjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
