import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nows")
export default class NowController {
  @operation({
    summary: "Get Nows",
  })
  @get()
  static getNows = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Now",
  })
  @post("{id}")
  static createNow = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
