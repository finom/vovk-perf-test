import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixb")
export default class IxbController {
  @operation({
    summary: "Get Ixb",
  })
  @get()
  static getIxb = procedure({
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
