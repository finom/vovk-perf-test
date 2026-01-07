import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpz")
export default class FpzController {
  @operation({
    summary: "Get Fpz",
  })
  @get()
  static getFpz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpz",
  })
  @post("{id}")
  static createFpz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
