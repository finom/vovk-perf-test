import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijz")
export default class IjzController {
  @operation({
    summary: "Get Ijz",
  })
  @get()
  static getIjz = procedure({
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
