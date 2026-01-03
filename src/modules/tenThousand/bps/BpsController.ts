import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bps")
export default class BpsController {
  @operation({
    summary: "Get Bps",
  })
  @get()
  static getBps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bps",
  })
  @post("{id}")
  static createBps = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
