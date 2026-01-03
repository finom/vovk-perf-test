import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emhs")
export default class EmhController {
  @operation({
    summary: "Get Emhs",
  })
  @get()
  static getEmhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emh",
  })
  @post("{id}")
  static createEmh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
