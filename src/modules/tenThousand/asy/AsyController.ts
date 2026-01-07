import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asy")
export default class AsyController {
  @operation({
    summary: "Get Asy",
  })
  @get()
  static getAsy = procedure({
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
