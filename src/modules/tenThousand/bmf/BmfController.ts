import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmfs")
export default class BmfController {
  @operation({
    summary: "Get Bmfs",
  })
  @get()
  static getBmfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmf",
  })
  @post("{id}")
  static createBmf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
