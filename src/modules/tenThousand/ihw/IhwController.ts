import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihw")
export default class IhwController {
  @operation({
    summary: "Get Ihw",
  })
  @get()
  static getIhw = procedure({
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
