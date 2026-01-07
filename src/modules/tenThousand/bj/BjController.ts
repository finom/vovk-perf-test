import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bj")
export default class BjController {
  @operation({
    summary: "Get Bj",
  })
  @get()
  static getBj = procedure({
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
