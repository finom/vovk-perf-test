import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cse")
export default class CseController {
  @operation({
    summary: "Get Cse",
  })
  @get()
  static getCse = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cse",
  })
  @post("{id}")
  static createCse = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
