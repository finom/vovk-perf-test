import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvjs")
export default class MvjController {
  @operation({
    summary: "Get Mvjs",
  })
  @get()
  static getMvjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvj",
  })
  @post("{id}")
  static createMvj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
