import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cphs")
export default class CphController {
  @operation({
    summary: "Get Cphs",
  })
  @get()
  static getCphs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cph",
  })
  @post("{id}")
  static createCph = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
