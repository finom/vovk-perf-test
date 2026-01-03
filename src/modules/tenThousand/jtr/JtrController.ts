import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtrs")
export default class JtrController {
  @operation({
    summary: "Get Jtrs",
  })
  @get()
  static getJtrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtr",
  })
  @post("{id}")
  static createJtr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
