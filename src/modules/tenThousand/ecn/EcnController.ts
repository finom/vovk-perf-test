import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecn")
export default class EcnController {
  @operation({
    summary: "Get Ecn",
  })
  @get()
  static getEcn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecn",
  })
  @post("{id}")
  static createEcn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
