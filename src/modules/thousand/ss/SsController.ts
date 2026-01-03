import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sses")
export default class SsController {
  @operation({
    summary: "Get Sses",
  })
  @get()
  static getSses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ss",
  })
  @post("{id}")
  static createSs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
