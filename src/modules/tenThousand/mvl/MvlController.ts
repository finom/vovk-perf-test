import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvl")
export default class MvlController {
  @operation({
    summary: "Get Mvl",
  })
  @get()
  static getMvl = procedure({
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
