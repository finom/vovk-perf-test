import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crg")
export default class CrgController {
  @operation({
    summary: "Get Crg",
  })
  @get()
  static getCrg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crg",
  })
  @post("{id}")
  static createCrg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
