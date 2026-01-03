import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhis")
export default class JhiController {
  @operation({
    summary: "Get Jhis",
  })
  @get()
  static getJhis = procedure({
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
