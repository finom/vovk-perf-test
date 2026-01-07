import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffb")
export default class FfbController {
  @operation({
    summary: "Get Ffb",
  })
  @get()
  static getFfb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffb",
  })
  @post("{id}")
  static createFfb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
