import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbfs")
export default class CbfController {
  @operation({
    summary: "Get Cbfs",
  })
  @get()
  static getCbfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbf",
  })
  @post("{id}")
  static createCbf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
