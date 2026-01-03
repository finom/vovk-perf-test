import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbbs")
export default class CbbController {
  @operation({
    summary: "Get Cbbs",
  })
  @get()
  static getCbbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbb",
  })
  @post("{id}")
  static createCbb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
