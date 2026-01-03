import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luys")
export default class LuyController {
  @operation({
    summary: "Get Luys",
  })
  @get()
  static getLuys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luy",
  })
  @post("{id}")
  static createLuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
