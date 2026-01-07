import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjv")
export default class CjvController {
  @operation({
    summary: "Get Cjv",
  })
  @get()
  static getCjv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjv",
  })
  @post("{id}")
  static createCjv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
