import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eeks")
export default class EekController {
  @operation({
    summary: "Get Eeks",
  })
  @get()
  static getEeks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eek",
  })
  @post("{id}")
  static createEek = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
