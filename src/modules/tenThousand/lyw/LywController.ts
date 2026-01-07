import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyw")
export default class LywController {
  @operation({
    summary: "Get Lyw",
  })
  @get()
  static getLyw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyw",
  })
  @post("{id}")
  static createLyw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
