import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgzs")
export default class FgzController {
  @operation({
    summary: "Get Fgzs",
  })
  @get()
  static getFgzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgz",
  })
  @post("{id}")
  static createFgz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
