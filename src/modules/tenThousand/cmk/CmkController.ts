import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmks")
export default class CmkController {
  @operation({
    summary: "Get Cmks",
  })
  @get()
  static getCmks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmk",
  })
  @post("{id}")
  static createCmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
