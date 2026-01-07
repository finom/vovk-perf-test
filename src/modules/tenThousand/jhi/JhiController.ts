import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhi")
export default class JhiController {
  @operation({
    summary: "Get Jhi",
  })
  @get()
  static getJhi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhi",
  })
  @post("{id}")
  static createJhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
