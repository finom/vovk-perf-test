import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsv")
export default class LsvController {
  @operation({
    summary: "Get Lsv",
  })
  @get()
  static getLsv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsv",
  })
  @post("{id}")
  static createLsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
