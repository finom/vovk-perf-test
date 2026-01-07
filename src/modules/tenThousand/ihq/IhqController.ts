import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihq")
export default class IhqController {
  @operation({
    summary: "Get Ihq",
  })
  @get()
  static getIhq = procedure({
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
