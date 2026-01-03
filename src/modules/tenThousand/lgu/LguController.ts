import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgus")
export default class LguController {
  @operation({
    summary: "Get Lgus",
  })
  @get()
  static getLgus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgu",
  })
  @post("{id}")
  static createLgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
