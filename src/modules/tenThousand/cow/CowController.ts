import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cows")
export default class CowController {
  @operation({
    summary: "Get Cows",
  })
  @get()
  static getCows = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cow",
  })
  @post("{id}")
  static createCow = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
