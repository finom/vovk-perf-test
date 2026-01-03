import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkqs")
export default class GkqController {
  @operation({
    summary: "Get Gkqs",
  })
  @get()
  static getGkqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkq",
  })
  @post("{id}")
  static createGkq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
