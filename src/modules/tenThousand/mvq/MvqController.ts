import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvq")
export default class MvqController {
  @operation({
    summary: "Get Mvq",
  })
  @get()
  static getMvq = procedure({
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
