import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpg")
export default class FpgController {
  @operation({
    summary: "Get Fpg",
  })
  @get()
  static getFpg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpg",
  })
  @post("{id}")
  static createFpg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
