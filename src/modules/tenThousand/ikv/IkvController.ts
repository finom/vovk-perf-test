import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikv")
export default class IkvController {
  @operation({
    summary: "Get Ikv",
  })
  @get()
  static getIkv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikv",
  })
  @post("{id}")
  static createIkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
