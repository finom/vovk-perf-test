import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzs")
export default class BzController {
  @operation({
    summary: "Get Bzs",
  })
  @get()
  static getBzs = procedure({
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
