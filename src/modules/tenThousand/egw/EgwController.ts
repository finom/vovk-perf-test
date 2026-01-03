import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egws")
export default class EgwController {
  @operation({
    summary: "Get Egws",
  })
  @get()
  static getEgws = procedure({
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
