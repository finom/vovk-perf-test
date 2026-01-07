import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdd")
export default class CddController {
  @operation({
    summary: "Get Cdd",
  })
  @get()
  static getCdd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdd",
  })
  @post("{id}")
  static createCdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
