import { procedure, prefix, get, post, operation } from "vovk";

@prefix("us")
export default class UController {
  @operation({
    summary: "Get US",
  })
  @get()
  static getUS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create U",
  })
  @post("{id}")
  static createU = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
