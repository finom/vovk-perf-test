import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvas")
export default class BvaController {
  @operation({
    summary: "Get Bvas",
  })
  @get()
  static getBvas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bva",
  })
  @post("{id}")
  static createBva = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
