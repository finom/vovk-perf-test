import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffbs")
export default class FfbController {
  @operation({
    summary: "Get Ffbs",
  })
  @get()
  static getFfbs = procedure({
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
