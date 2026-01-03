import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffies")
export default class FfyController {
  @operation({
    summary: "Get Ffies",
  })
  @get()
  static getFfies = procedure({
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
