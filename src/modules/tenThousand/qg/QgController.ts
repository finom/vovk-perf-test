import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qgs")
export default class QgController {
  @operation({
    summary: "Get Qgs",
  })
  @get()
  static getQgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qg",
  })
  @post("{id}")
  static createQg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
