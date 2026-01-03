import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqts")
export default class AqtController {
  @operation({
    summary: "Get Aqts",
  })
  @get()
  static getAqts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqt",
  })
  @post("{id}")
  static createAqt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
