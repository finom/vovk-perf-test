import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecj")
export default class EcjController {
  @operation({
    summary: "Get Ecj",
  })
  @get()
  static getEcj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecj",
  })
  @post("{id}")
  static createEcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
