import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmt")
export default class NmtController {
  @operation({
    summary: "Get Nmt",
  })
  @get()
  static getNmt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmt",
  })
  @post("{id}")
  static createNmt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
