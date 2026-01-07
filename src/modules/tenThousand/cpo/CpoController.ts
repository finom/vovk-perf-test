import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpo")
export default class CpoController {
  @operation({
    summary: "Get Cpo",
  })
  @get()
  static getCpo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpo",
  })
  @post("{id}")
  static createCpo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
