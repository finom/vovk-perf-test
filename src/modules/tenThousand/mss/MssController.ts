import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msses")
export default class MssController {
  @operation({
    summary: "Get Msses",
  })
  @get()
  static getMsses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mss",
  })
  @post("{id}")
  static createMss = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
