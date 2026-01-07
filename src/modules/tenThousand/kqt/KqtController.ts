import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqt")
export default class KqtController {
  @operation({
    summary: "Get Kqt",
  })
  @get()
  static getKqt = procedure({
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
