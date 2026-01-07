import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luy")
export default class LuyController {
  @operation({
    summary: "Get Luy",
  })
  @get()
  static getLuy = procedure({
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
