import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvms")
export default class MvmController {
  @operation({
    summary: "Get Mvms",
  })
  @get()
  static getMvms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvm",
  })
  @post("{id}")
  static createMvm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
