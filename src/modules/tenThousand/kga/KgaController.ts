import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kga")
export default class KgaController {
  @operation({
    summary: "Get Kga",
  })
  @get()
  static getKga = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kga",
  })
  @post("{id}")
  static createKga = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
