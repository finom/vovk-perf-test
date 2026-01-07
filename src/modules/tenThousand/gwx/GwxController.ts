import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwx")
export default class GwxController {
  @operation({
    summary: "Get Gwx",
  })
  @get()
  static getGwx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwx",
  })
  @post("{id}")
  static createGwx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
