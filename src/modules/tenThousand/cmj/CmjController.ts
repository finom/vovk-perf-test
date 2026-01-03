import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmjs")
export default class CmjController {
  @operation({
    summary: "Get Cmjs",
  })
  @get()
  static getCmjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmj",
  })
  @post("{id}")
  static createCmj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
