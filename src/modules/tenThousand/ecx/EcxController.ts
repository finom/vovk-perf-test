import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecx")
export default class EcxController {
  @operation({
    summary: "Get Ecx",
  })
  @get()
  static getEcx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecx",
  })
  @post("{id}")
  static createEcx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
