import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qvs")
export default class QvController {
  @operation({
    summary: "Get Qvs",
  })
  @get()
  static getQvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qv",
  })
  @post("{id}")
  static createQv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
