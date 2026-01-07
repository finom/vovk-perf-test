import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmh")
export default class FmhController {
  @operation({
    summary: "Get Fmh",
  })
  @get()
  static getFmh = procedure({
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
