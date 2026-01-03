import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvfs")
export default class MvfController {
  @operation({
    summary: "Get Mvfs",
  })
  @get()
  static getMvfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvf",
  })
  @post("{id}")
  static createMvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
