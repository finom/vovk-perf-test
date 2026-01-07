import { procedure, prefix, get, post, operation } from "vovk";

@prefix("key")
export default class KeyController {
  @operation({
    summary: "Get Key",
  })
  @get()
  static getKey = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Key",
  })
  @post("{id}")
  static createKey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
