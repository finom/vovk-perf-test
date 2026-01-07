import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqu")
export default class BquController {
  @operation({
    summary: "Get Bqu",
  })
  @get()
  static getBqu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqu",
  })
  @post("{id}")
  static createBqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
