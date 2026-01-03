import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwvs")
export default class MwvController {
  @operation({
    summary: "Get Mwvs",
  })
  @get()
  static getMwvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwv",
  })
  @post("{id}")
  static createMwv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
