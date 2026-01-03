import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvgs")
export default class MvgController {
  @operation({
    summary: "Get Mvgs",
  })
  @get()
  static getMvgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvg",
  })
  @post("{id}")
  static createMvg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
