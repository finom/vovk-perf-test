import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksvs")
export default class KsvController {
  @operation({
    summary: "Get Ksvs",
  })
  @get()
  static getKsvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksv",
  })
  @post("{id}")
  static createKsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
