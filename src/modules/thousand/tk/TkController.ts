import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tks")
export default class TkController {
  @operation({
    summary: "Get Tks",
  })
  @get()
  static getTks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tk",
  })
  @post("{id}")
  static createTk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
