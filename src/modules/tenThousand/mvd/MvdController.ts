import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvd")
export default class MvdController {
  @operation({
    summary: "Get Mvd",
  })
  @get()
  static getMvd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvd",
  })
  @post("{id}")
  static createMvd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
