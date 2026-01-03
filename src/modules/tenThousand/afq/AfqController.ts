import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afqs")
export default class AfqController {
  @operation({
    summary: "Get Afqs",
  })
  @get()
  static getAfqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afq",
  })
  @post("{id}")
  static createAfq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
