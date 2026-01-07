import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjp")
export default class CjpController {
  @operation({
    summary: "Get Cjp",
  })
  @get()
  static getCjp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjp",
  })
  @post("{id}")
  static createCjp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
