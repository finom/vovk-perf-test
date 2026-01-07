import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkz")
export default class KkzController {
  @operation({
    summary: "Get Kkz",
  })
  @get()
  static getKkz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkz",
  })
  @post("{id}")
  static createKkz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
