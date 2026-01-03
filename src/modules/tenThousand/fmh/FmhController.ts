import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmhs")
export default class FmhController {
  @operation({
    summary: "Get Fmhs",
  })
  @get()
  static getFmhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmh",
  })
  @post("{id}")
  static createFmh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
