import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekr")
export default class EkrController {
  @operation({
    summary: "Get Ekr",
  })
  @get()
  static getEkr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekr",
  })
  @post("{id}")
  static createEkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
