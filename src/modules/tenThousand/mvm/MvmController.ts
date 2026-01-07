import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvm")
export default class MvmController {
  @operation({
    summary: "Get Mvm",
  })
  @get()
  static getMvm = procedure({
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
