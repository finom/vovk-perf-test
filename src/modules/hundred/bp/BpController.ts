import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bps")
export default class BpController {
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
    summary: "Create Bp",
  })
  @post("{id}")
  static createBp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
