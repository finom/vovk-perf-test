import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgz")
export default class FgzController {
  @operation({
    summary: "Get Fgz",
  })
  @get()
  static getFgz = procedure({
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
