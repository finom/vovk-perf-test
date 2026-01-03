import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjjs")
export default class CjjController {
  @operation({
    summary: "Get Cjjs",
  })
  @get()
  static getCjjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjj",
  })
  @post("{id}")
  static createCjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
