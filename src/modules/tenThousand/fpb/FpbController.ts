import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpbs")
export default class FpbController {
  @operation({
    summary: "Get Fpbs",
  })
  @get()
  static getFpbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpb",
  })
  @post("{id}")
  static createFpb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
