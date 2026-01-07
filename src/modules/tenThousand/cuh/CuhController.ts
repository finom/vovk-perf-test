import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuh")
export default class CuhController {
  @operation({
    summary: "Get Cuh",
  })
  @get()
  static getCuh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cuh",
  })
  @post("{id}")
  static createCuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
