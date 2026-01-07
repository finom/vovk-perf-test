import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ice")
export default class IceController {
  @operation({
    summary: "Get Ice",
  })
  @get()
  static getIce = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ice",
  })
  @post("{id}")
  static createIce = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
