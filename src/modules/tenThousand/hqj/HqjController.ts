import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqjs")
export default class HqjController {
  @operation({
    summary: "Get Hqjs",
  })
  @get()
  static getHqjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqj",
  })
  @post("{id}")
  static createHqj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
