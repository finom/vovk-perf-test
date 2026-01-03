import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czjs")
export default class CzjController {
  @operation({
    summary: "Get Czjs",
  })
  @get()
  static getCzjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czj",
  })
  @post("{id}")
  static createCzj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
