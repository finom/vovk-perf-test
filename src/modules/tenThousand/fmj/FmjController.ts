import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmj")
export default class FmjController {
  @operation({
    summary: "Get Fmj",
  })
  @get()
  static getFmj = procedure({
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
