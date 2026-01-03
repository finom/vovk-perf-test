import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtes")
export default class MteController {
  @operation({
    summary: "Get Mtes",
  })
  @get()
  static getMtes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mte",
  })
  @post("{id}")
  static createMte = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
