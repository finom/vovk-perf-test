import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvjs")
export default class FvjController {
  @operation({
    summary: "Get Fvjs",
  })
  @get()
  static getFvjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvj",
  })
  @post("{id}")
  static createFvj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
