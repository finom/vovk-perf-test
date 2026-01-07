import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ceq")
export default class CeqController {
  @operation({
    summary: "Get Ceq",
  })
  @get()
  static getCeq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ceq",
  })
  @post("{id}")
  static createCeq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
