import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ch")
export default class ChController {
  @operation({
    summary: "Get Ch",
  })
  @get()
  static getCh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ch",
  })
  @post("{id}")
  static createCh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
