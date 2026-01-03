import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hixes")
export default class HixController {
  @operation({
    summary: "Get Hixes",
  })
  @get()
  static getHixes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hix",
  })
  @post("{id}")
  static createHix = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
