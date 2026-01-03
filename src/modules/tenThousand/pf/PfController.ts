import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pfs")
export default class PfController {
  @operation({
    summary: "Get Pfs",
  })
  @get()
  static getPfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pf",
  })
  @post("{id}")
  static createPf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
