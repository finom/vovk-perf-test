import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixjs")
export default class IxjController {
  @operation({
    summary: "Get Ixjs",
  })
  @get()
  static getIxjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixj",
  })
  @post("{id}")
  static createIxj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
