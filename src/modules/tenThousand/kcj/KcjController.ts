import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcjs")
export default class KcjController {
  @operation({
    summary: "Get Kcjs",
  })
  @get()
  static getKcjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcj",
  })
  @post("{id}")
  static createKcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
