import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewxes")
export default class EwxController {
  @operation({
    summary: "Get Ewxes",
  })
  @get()
  static getEwxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewx",
  })
  @post("{id}")
  static createEwx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
