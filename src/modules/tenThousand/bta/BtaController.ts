import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bta")
export default class BtaController {
  @operation({
    summary: "Get Bta",
  })
  @get()
  static getBta = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bta",
  })
  @post("{id}")
  static createBta = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
