import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvps")
export default class MvpController {
  @operation({
    summary: "Get Mvps",
  })
  @get()
  static getMvps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvp",
  })
  @post("{id}")
  static createMvp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
