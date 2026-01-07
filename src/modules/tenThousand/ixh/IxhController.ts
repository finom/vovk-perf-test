import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixh")
export default class IxhController {
  @operation({
    summary: "Get Ixh",
  })
  @get()
  static getIxh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixh",
  })
  @post("{id}")
  static createIxh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
