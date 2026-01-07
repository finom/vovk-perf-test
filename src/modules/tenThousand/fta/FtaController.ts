import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fta")
export default class FtaController {
  @operation({
    summary: "Get Fta",
  })
  @get()
  static getFta = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fta",
  })
  @post("{id}")
  static createFta = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
