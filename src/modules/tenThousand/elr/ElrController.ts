import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elr")
export default class ElrController {
  @operation({
    summary: "Get Elr",
  })
  @get()
  static getElr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elr",
  })
  @post("{id}")
  static createElr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
