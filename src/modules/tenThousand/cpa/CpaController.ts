import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpa")
export default class CpaController {
  @operation({
    summary: "Get Cpa",
  })
  @get()
  static getCpa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpa",
  })
  @post("{id}")
  static createCpa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
