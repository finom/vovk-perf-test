import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqts")
export default class KqtController {
  @operation({
    summary: "Get Kqts",
  })
  @get()
  static getKqts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqt",
  })
  @post("{id}")
  static createKqt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
