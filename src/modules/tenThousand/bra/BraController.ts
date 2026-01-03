import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bras")
export default class BraController {
  @operation({
    summary: "Get Bras",
  })
  @get()
  static getBras = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bra",
  })
  @post("{id}")
  static createBra = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
