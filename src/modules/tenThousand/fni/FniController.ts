import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnis")
export default class FniController {
  @operation({
    summary: "Get Fnis",
  })
  @get()
  static getFnis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fni",
  })
  @post("{id}")
  static createFni = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
