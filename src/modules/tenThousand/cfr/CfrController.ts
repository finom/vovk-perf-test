import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfrs")
export default class CfrController {
  @operation({
    summary: "Get Cfrs",
  })
  @get()
  static getCfrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfr",
  })
  @post("{id}")
  static createCfr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
