import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgos")
export default class BgoController {
  @operation({
    summary: "Get Bgos",
  })
  @get()
  static getBgos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgo",
  })
  @post("{id}")
  static createBgo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
