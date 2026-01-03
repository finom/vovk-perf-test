import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrxes")
export default class MrxController {
  @operation({
    summary: "Get Mrxes",
  })
  @get()
  static getMrxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrx",
  })
  @post("{id}")
  static createMrx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
