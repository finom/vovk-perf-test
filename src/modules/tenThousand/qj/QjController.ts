import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qjs")
export default class QjController {
  @operation({
    summary: "Get Qjs",
  })
  @get()
  static getQjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qj",
  })
  @post("{id}")
  static createQj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
