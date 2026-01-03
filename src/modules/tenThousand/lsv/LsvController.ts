import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsvs")
export default class LsvController {
  @operation({
    summary: "Get Lsvs",
  })
  @get()
  static getLsvs = procedure({
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
