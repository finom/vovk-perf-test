import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjs")
export default class BjController {
  @operation({
    summary: "Get Bjs",
  })
  @get()
  static getBjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bj",
  })
  @post("{id}")
  static createBj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
