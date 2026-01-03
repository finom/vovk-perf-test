import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqts")
export default class CqtController {
  @operation({
    summary: "Get Cqts",
  })
  @get()
  static getCqts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqt",
  })
  @post("{id}")
  static createCqt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
