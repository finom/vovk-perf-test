import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esgs")
export default class EsgController {
  @operation({
    summary: "Get Esgs",
  })
  @get()
  static getEsgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esg",
  })
  @post("{id}")
  static createEsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
