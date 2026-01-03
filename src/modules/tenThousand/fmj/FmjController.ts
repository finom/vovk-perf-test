import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmjs")
export default class FmjController {
  @operation({
    summary: "Get Fmjs",
  })
  @get()
  static getFmjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmj",
  })
  @post("{id}")
  static createFmj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
