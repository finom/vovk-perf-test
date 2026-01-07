import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mww")
export default class MwwController {
  @operation({
    summary: "Get Mww",
  })
  @get()
  static getMww = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mww",
  })
  @post("{id}")
  static createMww = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
