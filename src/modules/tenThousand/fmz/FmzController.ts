import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmzs")
export default class FmzController {
  @operation({
    summary: "Get Fmzs",
  })
  @get()
  static getFmzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmz",
  })
  @post("{id}")
  static createFmz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
