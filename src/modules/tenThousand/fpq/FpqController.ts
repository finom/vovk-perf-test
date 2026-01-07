import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpq")
export default class FpqController {
  @operation({
    summary: "Get Fpq",
  })
  @get()
  static getFpq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpq",
  })
  @post("{id}")
  static createFpq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
