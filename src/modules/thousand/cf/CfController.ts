import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfs")
export default class CfController {
  @operation({
    summary: "Get Cfs",
  })
  @get()
  static getCfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cf",
  })
  @post("{id}")
  static createCf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
