import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cis")
export default class CisController {
  @operation({
    summary: "Get Cis",
  })
  @get()
  static getCis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cis",
  })
  @post("{id}")
  static createCis = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
