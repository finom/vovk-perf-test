import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffy")
export default class FfyController {
  @operation({
    summary: "Get Ffy",
  })
  @get()
  static getFfy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffy",
  })
  @post("{id}")
  static createFfy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
