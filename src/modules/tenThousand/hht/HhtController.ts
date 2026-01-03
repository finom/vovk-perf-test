import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhts")
export default class HhtController {
  @operation({
    summary: "Get Hhts",
  })
  @get()
  static getHhts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hht",
  })
  @post("{id}")
  static createHht = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
