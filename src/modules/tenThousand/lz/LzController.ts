import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lz")
export default class LzController {
  @operation({
    summary: "Get Lz",
  })
  @get()
  static getLz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lz",
  })
  @post("{id}")
  static createLz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
