import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anps")
export default class AnpController {
  @operation({
    summary: "Get Anps",
  })
  @get()
  static getAnps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Anp",
  })
  @post("{id}")
  static createAnp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
