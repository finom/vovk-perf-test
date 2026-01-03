import { procedure, prefix, get, post, operation } from "vovk";

@prefix("they")
export default class HeController {
  @operation({
    summary: "Get They",
  })
  @get()
  static getThey = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create He",
  })
  @post("{id}")
  static createHe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
