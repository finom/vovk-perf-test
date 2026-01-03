import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koms")
export default class KomController {
  @operation({
    summary: "Get Koms",
  })
  @get()
  static getKoms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kom",
  })
  @post("{id}")
  static createKom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
