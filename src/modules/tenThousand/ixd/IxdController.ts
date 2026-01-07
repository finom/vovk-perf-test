import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixd")
export default class IxdController {
  @operation({
    summary: "Get Ixd",
  })
  @get()
  static getIxd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixd",
  })
  @post("{id}")
  static createIxd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
