import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwx")
export default class MwxController {
  @operation({
    summary: "Get Mwx",
  })
  @get()
  static getMwx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwx",
  })
  @post("{id}")
  static createMwx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
