import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwa")
export default class LwaController {
  @operation({
    summary: "Get Lwa",
  })
  @get()
  static getLwa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwa",
  })
  @post("{id}")
  static createLwa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
