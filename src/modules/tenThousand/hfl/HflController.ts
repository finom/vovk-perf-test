import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfls")
export default class HflController {
  @operation({
    summary: "Get Hfls",
  })
  @get()
  static getHfls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfl",
  })
  @post("{id}")
  static createHfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
