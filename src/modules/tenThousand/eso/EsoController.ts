import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esos")
export default class EsoController {
  @operation({
    summary: "Get Esos",
  })
  @get()
  static getEsos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eso",
  })
  @post("{id}")
  static createEso = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
