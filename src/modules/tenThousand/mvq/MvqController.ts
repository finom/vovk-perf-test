import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvqs")
export default class MvqController {
  @operation({
    summary: "Get Mvqs",
  })
  @get()
  static getMvqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvq",
  })
  @post("{id}")
  static createMvq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
