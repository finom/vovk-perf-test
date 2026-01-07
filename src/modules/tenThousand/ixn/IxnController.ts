import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixn")
export default class IxnController {
  @operation({
    summary: "Get Ixn",
  })
  @get()
  static getIxn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixn",
  })
  @post("{id}")
  static createIxn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
