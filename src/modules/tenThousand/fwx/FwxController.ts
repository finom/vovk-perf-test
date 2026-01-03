import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwxes")
export default class FwxController {
  @operation({
    summary: "Get Fwxes",
  })
  @get()
  static getFwxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwx",
  })
  @post("{id}")
  static createFwx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
