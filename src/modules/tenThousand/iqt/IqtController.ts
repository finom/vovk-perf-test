import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqts")
export default class IqtController {
  @operation({
    summary: "Get Iqts",
  })
  @get()
  static getIqts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqt",
  })
  @post("{id}")
  static createIqt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
