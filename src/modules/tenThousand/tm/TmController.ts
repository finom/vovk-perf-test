import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tms")
export default class TmController {
  @operation({
    summary: "Get Tms",
  })
  @get()
  static getTms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tm",
  })
  @post("{id}")
  static createTm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
