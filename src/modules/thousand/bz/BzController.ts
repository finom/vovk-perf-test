import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bz")
export default class BzController {
  @operation({
    summary: "Get Bz",
  })
  @get()
  static getBz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bz",
  })
  @post("{id}")
  static createBz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
