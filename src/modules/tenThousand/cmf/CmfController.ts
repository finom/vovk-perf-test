import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmf")
export default class CmfController {
  @operation({
    summary: "Get Cmf",
  })
  @get()
  static getCmf = procedure({
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
