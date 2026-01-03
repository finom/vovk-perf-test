import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvbs")
export default class MvbController {
  @operation({
    summary: "Get Mvbs",
  })
  @get()
  static getMvbs = procedure({
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
