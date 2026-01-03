import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijzs")
export default class IjzController {
  @operation({
    summary: "Get Ijzs",
  })
  @get()
  static getIjzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijz",
  })
  @post("{id}")
  static createIjz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
