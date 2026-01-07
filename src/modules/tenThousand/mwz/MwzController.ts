import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwz")
export default class MwzController {
  @operation({
    summary: "Get Mwz",
  })
  @get()
  static getMwz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwz",
  })
  @post("{id}")
  static createMwz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
