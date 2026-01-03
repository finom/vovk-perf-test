import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctns")
export default class CtnController {
  @operation({
    summary: "Get Ctns",
  })
  @get()
  static getCtns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctn",
  })
  @post("{id}")
  static createCtn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
