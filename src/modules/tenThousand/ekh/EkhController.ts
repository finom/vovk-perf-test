import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekhs")
export default class EkhController {
  @operation({
    summary: "Get Ekhs",
  })
  @get()
  static getEkhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekh",
  })
  @post("{id}")
  static createEkh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
