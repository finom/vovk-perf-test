import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvzs")
export default class MvzController {
  @operation({
    summary: "Get Mvzs",
  })
  @get()
  static getMvzs = procedure({
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
