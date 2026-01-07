import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpk")
export default class MpkController {
  @operation({
    summary: "Get Mpk",
  })
  @get()
  static getMpk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpk",
  })
  @post("{id}")
  static createMpk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
