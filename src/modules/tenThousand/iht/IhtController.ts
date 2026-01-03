import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihts")
export default class IhtController {
  @operation({
    summary: "Get Ihts",
  })
  @get()
  static getIhts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iht",
  })
  @post("{id}")
  static createIht = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
