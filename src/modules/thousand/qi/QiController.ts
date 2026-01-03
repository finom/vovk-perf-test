import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qis")
export default class QiController {
  @operation({
    summary: "Get Qis",
  })
  @get()
  static getQis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qi",
  })
  @post("{id}")
  static createQi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
