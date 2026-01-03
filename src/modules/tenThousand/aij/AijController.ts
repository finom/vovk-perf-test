import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aijs")
export default class AijController {
  @operation({
    summary: "Get Aijs",
  })
  @get()
  static getAijs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aij",
  })
  @post("{id}")
  static createAij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
