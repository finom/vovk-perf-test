import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksv")
export default class KsvController {
  @operation({
    summary: "Get Ksv",
  })
  @get()
  static getKsv = procedure({
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
