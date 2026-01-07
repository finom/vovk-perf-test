import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgo")
export default class FgoController {
  @operation({
    summary: "Get Fgo",
  })
  @get()
  static getFgo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgo",
  })
  @post("{id}")
  static createFgo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
