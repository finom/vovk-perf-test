import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwqs")
export default class GwqController {
  @operation({
    summary: "Get Gwqs",
  })
  @get()
  static getGwqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwq",
  })
  @post("{id}")
  static createGwq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
