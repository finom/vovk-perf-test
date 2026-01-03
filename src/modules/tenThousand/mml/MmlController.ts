import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmls")
export default class MmlController {
  @operation({
    summary: "Get Mmls",
  })
  @get()
  static getMmls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mml",
  })
  @post("{id}")
  static createMml = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
