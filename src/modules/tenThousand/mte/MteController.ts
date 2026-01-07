import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mte")
export default class MteController {
  @operation({
    summary: "Get Mte",
  })
  @get()
  static getMte = procedure({
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
