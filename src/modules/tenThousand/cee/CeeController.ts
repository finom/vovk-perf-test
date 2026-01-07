import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cee")
export default class CeeController {
  @operation({
    summary: "Get Cee",
  })
  @get()
  static getCee = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cee",
  })
  @post("{id}")
  static createCee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
