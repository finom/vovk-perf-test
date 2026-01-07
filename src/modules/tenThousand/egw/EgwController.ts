import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egw")
export default class EgwController {
  @operation({
    summary: "Get Egw",
  })
  @get()
  static getEgw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egw",
  })
  @post("{id}")
  static createEgw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
