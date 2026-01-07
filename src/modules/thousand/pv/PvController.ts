import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pv")
export default class PvController {
  @operation({
    summary: "Get Pv",
  })
  @get()
  static getPv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pv",
  })
  @post("{id}")
  static createPv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
