import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpts")
export default class HptController {
  @operation({
    summary: "Get Hpts",
  })
  @get()
  static getHpts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpt",
  })
  @post("{id}")
  static createHpt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
