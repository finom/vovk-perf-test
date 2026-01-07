import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyw")
export default class CywController {
  @operation({
    summary: "Get Cyw",
  })
  @get()
  static getCyw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyw",
  })
  @post("{id}")
  static createCyw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
