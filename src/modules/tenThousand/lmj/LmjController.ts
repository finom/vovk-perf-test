import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmjs")
export default class LmjController {
  @operation({
    summary: "Get Lmjs",
  })
  @get()
  static getLmjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmj",
  })
  @post("{id}")
  static createLmj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
