import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmjs")
export default class MmjController {
  @operation({
    summary: "Get Mmjs",
  })
  @get()
  static getMmjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmj",
  })
  @post("{id}")
  static createMmj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
