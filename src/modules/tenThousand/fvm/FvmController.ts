import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvms")
export default class FvmController {
  @operation({
    summary: "Get Fvms",
  })
  @get()
  static getFvms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvm",
  })
  @post("{id}")
  static createFvm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
