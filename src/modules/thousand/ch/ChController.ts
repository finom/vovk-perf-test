import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ches")
export default class ChController {
  @operation({
    summary: "Get Ches",
  })
  @get()
  static getChes = procedure({
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
