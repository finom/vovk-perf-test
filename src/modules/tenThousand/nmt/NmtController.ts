import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmts")
export default class NmtController {
  @operation({
    summary: "Get Nmts",
  })
  @get()
  static getNmts = procedure({
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
