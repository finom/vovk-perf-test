import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmv")
export default class NmvController {
  @operation({
    summary: "Get Nmv",
  })
  @get()
  static getNmv = procedure({
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
