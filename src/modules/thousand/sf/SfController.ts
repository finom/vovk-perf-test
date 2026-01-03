import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sfs")
export default class SfController {
  @operation({
    summary: "Get Sfs",
  })
  @get()
  static getSfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sf",
  })
  @post("{id}")
  static createSf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
