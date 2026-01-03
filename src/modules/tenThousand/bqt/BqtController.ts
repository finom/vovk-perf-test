import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqts")
export default class BqtController {
  @operation({
    summary: "Get Bqts",
  })
  @get()
  static getBqts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqt",
  })
  @post("{id}")
  static createBqt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
