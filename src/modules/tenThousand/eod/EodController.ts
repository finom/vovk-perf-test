import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eods")
export default class EodController {
  @operation({
    summary: "Get Eods",
  })
  @get()
  static getEods = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eod",
  })
  @post("{id}")
  static createEod = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
