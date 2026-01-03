import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clos")
export default class CloController {
  @operation({
    summary: "Get Clos",
  })
  @get()
  static getClos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clo",
  })
  @post("{id}")
  static createClo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
