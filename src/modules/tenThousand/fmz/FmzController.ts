import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmz")
export default class FmzController {
  @operation({
    summary: "Get Fmz",
  })
  @get()
  static getFmz = procedure({
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
