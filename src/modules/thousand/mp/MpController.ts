import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mps")
export default class MpController {
  @operation({
    summary: "Get Mps",
  })
  @get()
  static getMps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mp",
  })
  @post("{id}")
  static createMp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
