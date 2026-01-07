import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecf")
export default class EcfController {
  @operation({
    summary: "Get Ecf",
  })
  @get()
  static getEcf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecf",
  })
  @post("{id}")
  static createEcf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
