import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cprs")
export default class CprController {
  @operation({
    summary: "Get Cprs",
  })
  @get()
  static getCprs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpr",
  })
  @post("{id}")
  static createCpr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
