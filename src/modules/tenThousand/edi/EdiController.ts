import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edis")
export default class EdiController {
  @operation({
    summary: "Get Edis",
  })
  @get()
  static getEdis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edi",
  })
  @post("{id}")
  static createEdi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
