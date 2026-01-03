import { procedure, prefix, get, post, operation } from "vovk";

@prefix("effs")
export default class EffController {
  @operation({
    summary: "Get Effs",
  })
  @get()
  static getEffs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eff",
  })
  @post("{id}")
  static createEff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
