import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxxes")
export default class CxxController {
  @operation({
    summary: "Get Cxxes",
  })
  @get()
  static getCxxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxx",
  })
  @post("{id}")
  static createCxx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
