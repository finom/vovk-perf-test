import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjps")
export default class CjpController {
  @operation({
    summary: "Get Cjps",
  })
  @get()
  static getCjps = procedure({
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
