import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfo")
export default class KfoController {
  @operation({
    summary: "Get Kfo",
  })
  @get()
  static getKfo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfo",
  })
  @post("{id}")
  static createKfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
