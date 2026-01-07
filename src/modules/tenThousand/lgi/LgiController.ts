import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgi")
export default class LgiController {
  @operation({
    summary: "Get Lgi",
  })
  @get()
  static getLgi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgi",
  })
  @post("{id}")
  static createLgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
