import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvv")
export default class MvvController {
  @operation({
    summary: "Get Mvv",
  })
  @get()
  static getMvv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvv",
  })
  @post("{id}")
  static createMvv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
