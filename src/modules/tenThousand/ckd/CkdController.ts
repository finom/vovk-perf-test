import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckds")
export default class CkdController {
  @operation({
    summary: "Get Ckds",
  })
  @get()
  static getCkds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckd",
  })
  @post("{id}")
  static createCkd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
