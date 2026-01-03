import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djms")
export default class DjmController {
  @operation({
    summary: "Get Djms",
  })
  @get()
  static getDjms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djm",
  })
  @post("{id}")
  static createDjm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
