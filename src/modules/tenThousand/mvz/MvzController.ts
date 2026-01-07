import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvz")
export default class MvzController {
  @operation({
    summary: "Get Mvz",
  })
  @get()
  static getMvz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvz",
  })
  @post("{id}")
  static createMvz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
