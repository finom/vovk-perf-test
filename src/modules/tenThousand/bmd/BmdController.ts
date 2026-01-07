import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmd")
export default class BmdController {
  @operation({
    summary: "Get Bmd",
  })
  @get()
  static getBmd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmd",
  })
  @post("{id}")
  static createBmd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
