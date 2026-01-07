import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpq")
export default class LpqController {
  @operation({
    summary: "Get Lpq",
  })
  @get()
  static getLpq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpq",
  })
  @post("{id}")
  static createLpq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
