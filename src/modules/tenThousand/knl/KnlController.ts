import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knls")
export default class KnlController {
  @operation({
    summary: "Get Knls",
  })
  @get()
  static getKnls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knl",
  })
  @post("{id}")
  static createKnl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
