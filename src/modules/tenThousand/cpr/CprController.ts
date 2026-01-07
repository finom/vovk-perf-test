import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpr")
export default class CprController {
  @operation({
    summary: "Get Cpr",
  })
  @get()
  static getCpr = procedure({
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
