import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihqs")
export default class IhqController {
  @operation({
    summary: "Get Ihqs",
  })
  @get()
  static getIhqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihq",
  })
  @post("{id}")
  static createIhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
