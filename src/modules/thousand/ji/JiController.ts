import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ji")
export default class JiController {
  @operation({
    summary: "Get Ji",
  })
  @get()
  static getJi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ji",
  })
  @post("{id}")
  static createJi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
