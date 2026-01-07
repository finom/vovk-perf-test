import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlt")
export default class HltController {
  @operation({
    summary: "Get Hlt",
  })
  @get()
  static getHlt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlt",
  })
  @post("{id}")
  static createHlt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
