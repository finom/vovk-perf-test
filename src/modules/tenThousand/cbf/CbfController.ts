import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbf")
export default class CbfController {
  @operation({
    summary: "Get Cbf",
  })
  @get()
  static getCbf = procedure({
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
