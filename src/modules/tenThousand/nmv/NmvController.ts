import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmvs")
export default class NmvController {
  @operation({
    summary: "Get Nmvs",
  })
  @get()
  static getNmvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmv",
  })
  @post("{id}")
  static createNmv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
