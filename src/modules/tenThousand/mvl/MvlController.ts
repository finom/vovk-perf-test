import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvls")
export default class MvlController {
  @operation({
    summary: "Get Mvls",
  })
  @get()
  static getMvls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvl",
  })
  @post("{id}")
  static createMvl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
