import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afq")
export default class AfqController {
  @operation({
    summary: "Get Afq",
  })
  @get()
  static getAfq = procedure({
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
