import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmw")
export default class FmwController {
  @operation({
    summary: "Get Fmw",
  })
  @get()
  static getFmw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmw",
  })
  @post("{id}")
  static createFmw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
