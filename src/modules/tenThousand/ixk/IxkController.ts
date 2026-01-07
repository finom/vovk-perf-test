import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixk")
export default class IxkController {
  @operation({
    summary: "Get Ixk",
  })
  @get()
  static getIxk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixk",
  })
  @post("{id}")
  static createIxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
