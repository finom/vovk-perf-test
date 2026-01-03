import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmvs")
export default class CmvController {
  @operation({
    summary: "Get Cmvs",
  })
  @get()
  static getCmvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmv",
  })
  @post("{id}")
  static createCmv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
