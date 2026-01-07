import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixp")
export default class IxpController {
  @operation({
    summary: "Get Ixp",
  })
  @get()
  static getIxp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixp",
  })
  @post("{id}")
  static createIxp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
