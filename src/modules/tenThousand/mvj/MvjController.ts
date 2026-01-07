import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvj")
export default class MvjController {
  @operation({
    summary: "Get Mvj",
  })
  @get()
  static getMvj = procedure({
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
