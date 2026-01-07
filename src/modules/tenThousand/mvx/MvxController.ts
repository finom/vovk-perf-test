import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvx")
export default class MvxController {
  @operation({
    summary: "Get Mvx",
  })
  @get()
  static getMvx = procedure({
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
