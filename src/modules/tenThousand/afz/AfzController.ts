import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afzs")
export default class AfzController {
  @operation({
    summary: "Get Afzs",
  })
  @get()
  static getAfzs = procedure({
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
