import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvfs")
export default class FvfController {
  @operation({
    summary: "Get Fvfs",
  })
  @get()
  static getFvfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvf",
  })
  @post("{id}")
  static createFvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
