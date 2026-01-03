import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnls")
export default class DnlController {
  @operation({
    summary: "Get Dnls",
  })
  @get()
  static getDnls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnl",
  })
  @post("{id}")
  static createDnl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
