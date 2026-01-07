import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjm")
export default class CjmController {
  @operation({
    summary: "Get Cjm",
  })
  @get()
  static getCjm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjm",
  })
  @post("{id}")
  static createCjm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
