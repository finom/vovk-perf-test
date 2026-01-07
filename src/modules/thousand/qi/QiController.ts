import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qi")
export default class QiController {
  @operation({
    summary: "Get Qi",
  })
  @get()
  static getQi = procedure({
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
