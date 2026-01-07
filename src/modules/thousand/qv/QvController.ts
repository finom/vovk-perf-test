import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qv")
export default class QvController {
  @operation({
    summary: "Get Qv",
  })
  @get()
  static getQv = procedure({
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
