import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtm")
export default class MtmController {
  @operation({
    summary: "Get Mtm",
  })
  @get()
  static getMtm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtm",
  })
  @post("{id}")
  static createMtm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
