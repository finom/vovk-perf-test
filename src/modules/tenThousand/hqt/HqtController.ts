import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqts")
export default class HqtController {
  @operation({
    summary: "Get Hqts",
  })
  @get()
  static getHqts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqt",
  })
  @post("{id}")
  static createHqt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
