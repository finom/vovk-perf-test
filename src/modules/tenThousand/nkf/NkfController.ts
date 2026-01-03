import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkfs")
export default class NkfController {
  @operation({
    summary: "Get Nkfs",
  })
  @get()
  static getNkfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkf",
  })
  @post("{id}")
  static createNkf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
