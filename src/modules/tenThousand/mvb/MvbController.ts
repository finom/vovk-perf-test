import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvb")
export default class MvbController {
  @operation({
    summary: "Get Mvb",
  })
  @get()
  static getMvb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvb",
  })
  @post("{id}")
  static createMvb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
