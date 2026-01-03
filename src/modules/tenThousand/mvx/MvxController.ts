import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvxes")
export default class MvxController {
  @operation({
    summary: "Get Mvxes",
  })
  @get()
  static getMvxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvx",
  })
  @post("{id}")
  static createMvx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
