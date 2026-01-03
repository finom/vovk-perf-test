import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djps")
export default class DjpController {
  @operation({
    summary: "Get Djps",
  })
  @get()
  static getDjps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djp",
  })
  @post("{id}")
  static createDjp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
