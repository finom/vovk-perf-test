import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjls")
export default class CjlController {
  @operation({
    summary: "Get Cjls",
  })
  @get()
  static getCjls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjl",
  })
  @post("{id}")
  static createCjl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
