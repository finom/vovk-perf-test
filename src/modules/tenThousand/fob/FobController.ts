import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fob")
export default class FobController {
  @operation({
    summary: "Get Fob",
  })
  @get()
  static getFob = procedure({
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
