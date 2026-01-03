import { procedure, prefix, get, post, operation } from "vovk";

@prefix("haes")
export default class HaeController {
  @operation({
    summary: "Get Haes",
  })
  @get()
  static getHaes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hae",
  })
  @post("{id}")
  static createHae = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
