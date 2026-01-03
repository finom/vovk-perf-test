import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fobs")
export default class FobController {
  @operation({
    summary: "Get Fobs",
  })
  @get()
  static getFobs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fob",
  })
  @post("{id}")
  static createFob = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
