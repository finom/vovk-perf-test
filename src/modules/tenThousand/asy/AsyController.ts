import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asies")
export default class AsyController {
  @operation({
    summary: "Get Asies",
  })
  @get()
  static getAsies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asy",
  })
  @post("{id}")
  static createAsy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
