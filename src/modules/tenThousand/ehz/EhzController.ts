import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehz")
export default class EhzController {
  @operation({
    summary: "Get Ehz",
  })
  @get()
  static getEhz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehz",
  })
  @post("{id}")
  static createEhz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
