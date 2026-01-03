import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blvs")
export default class BlvController {
  @operation({
    summary: "Get Blvs",
  })
  @get()
  static getBlvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blv",
  })
  @post("{id}")
  static createBlv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
