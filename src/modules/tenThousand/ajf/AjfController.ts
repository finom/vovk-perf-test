import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajfs")
export default class AjfController {
  @operation({
    summary: "Get Ajfs",
  })
  @get()
  static getAjfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajf",
  })
  @post("{id}")
  static createAjf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
