import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qbs")
export default class QbController {
  @operation({
    summary: "Get Qbs",
  })
  @get()
  static getQbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qb",
  })
  @post("{id}")
  static createQb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
