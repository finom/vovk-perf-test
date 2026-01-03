import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmcs")
export default class NmcController {
  @operation({
    summary: "Get Nmcs",
  })
  @get()
  static getNmcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmc",
  })
  @post("{id}")
  static createNmc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
