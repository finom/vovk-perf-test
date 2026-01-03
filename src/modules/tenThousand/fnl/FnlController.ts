import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnls")
export default class FnlController {
  @operation({
    summary: "Get Fnls",
  })
  @get()
  static getFnls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnl",
  })
  @post("{id}")
  static createFnl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
