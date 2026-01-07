import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wu")
export default class WuController {
  @operation({
    summary: "Get Wu",
  })
  @get()
  static getWu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wu",
  })
  @post("{id}")
  static createWu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
