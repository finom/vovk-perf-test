import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kt")
export default class KtController {
  @operation({
    summary: "Get Kt",
  })
  @get()
  static getKt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kt",
  })
  @post("{id}")
  static createKt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
