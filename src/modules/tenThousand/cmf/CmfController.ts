import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmfs")
export default class CmfController {
  @operation({
    summary: "Get Cmfs",
  })
  @get()
  static getCmfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmf",
  })
  @post("{id}")
  static createCmf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
