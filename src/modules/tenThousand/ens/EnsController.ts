import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ens")
export default class EnsController {
  @operation({
    summary: "Get Ens",
  })
  @get()
  static getEns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ens",
  })
  @post("{id}")
  static createEns = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
