import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjks")
export default class CjkController {
  @operation({
    summary: "Get Cjks",
  })
  @get()
  static getCjks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjk",
  })
  @post("{id}")
  static createCjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
