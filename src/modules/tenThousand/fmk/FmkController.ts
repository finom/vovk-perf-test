import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmks")
export default class FmkController {
  @operation({
    summary: "Get Fmks",
  })
  @get()
  static getFmks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmk",
  })
  @post("{id}")
  static createFmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
