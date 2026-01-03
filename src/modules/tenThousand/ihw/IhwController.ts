import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihws")
export default class IhwController {
  @operation({
    summary: "Get Ihws",
  })
  @get()
  static getIhws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihw",
  })
  @post("{id}")
  static createIhw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
