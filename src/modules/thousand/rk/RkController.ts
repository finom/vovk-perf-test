import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rks")
export default class RkController {
  @operation({
    summary: "Get Rks",
  })
  @get()
  static getRks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rk",
  })
  @post("{id}")
  static createRk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
