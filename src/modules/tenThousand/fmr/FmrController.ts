import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmrs")
export default class FmrController {
  @operation({
    summary: "Get Fmrs",
  })
  @get()
  static getFmrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmr",
  })
  @post("{id}")
  static createFmr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
