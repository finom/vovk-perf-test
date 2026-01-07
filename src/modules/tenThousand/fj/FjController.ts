import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fj")
export default class FjController {
  @operation({
    summary: "Get Fj",
  })
  @get()
  static getFj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fj",
  })
  @post("{id}")
  static createFj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
