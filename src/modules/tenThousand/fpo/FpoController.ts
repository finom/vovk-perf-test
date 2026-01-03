import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpos")
export default class FpoController {
  @operation({
    summary: "Get Fpos",
  })
  @get()
  static getFpos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpo",
  })
  @post("{id}")
  static createFpo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
