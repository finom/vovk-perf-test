import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etus")
export default class EtuController {
  @operation({
    summary: "Get Etus",
  })
  @get()
  static getEtus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etu",
  })
  @post("{id}")
  static createEtu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
