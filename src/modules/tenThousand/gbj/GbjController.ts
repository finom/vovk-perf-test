import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbjs")
export default class GbjController {
  @operation({
    summary: "Get Gbjs",
  })
  @get()
  static getGbjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbj",
  })
  @post("{id}")
  static createGbj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
