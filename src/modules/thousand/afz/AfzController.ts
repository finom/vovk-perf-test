import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afz")
export default class AfzController {
  @operation({
    summary: "Get Afz",
  })
  @get()
  static getAfz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afz",
  })
  @post("{id}")
  static createAfz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
