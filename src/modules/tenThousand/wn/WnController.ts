import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wn")
export default class WnController {
  @operation({
    summary: "Get Wn",
  })
  @get()
  static getWn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wn",
  })
  @post("{id}")
  static createWn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
