import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixbs")
export default class IxbController {
  @operation({
    summary: "Get Ixbs",
  })
  @get()
  static getIxbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixb",
  })
  @post("{id}")
  static createIxb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
