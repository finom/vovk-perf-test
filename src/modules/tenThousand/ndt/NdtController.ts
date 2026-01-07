import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndt")
export default class NdtController {
  @operation({
    summary: "Get Ndt",
  })
  @get()
  static getNdt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndt",
  })
  @post("{id}")
  static createNdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
