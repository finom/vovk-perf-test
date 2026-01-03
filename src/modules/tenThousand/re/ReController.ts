import { procedure, prefix, get, post, operation } from "vovk";

@prefix("res")
export default class ReController {
  @operation({
    summary: "Get Res",
  })
  @get()
  static getRes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Re",
  })
  @post("{id}")
  static createRe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
