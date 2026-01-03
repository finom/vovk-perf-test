import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqjs")
export default class CqjController {
  @operation({
    summary: "Get Cqjs",
  })
  @get()
  static getCqjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqj",
  })
  @post("{id}")
  static createCqj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
