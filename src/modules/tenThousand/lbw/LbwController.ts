import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbws")
export default class LbwController {
  @operation({
    summary: "Get Lbws",
  })
  @get()
  static getLbws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbw",
  })
  @post("{id}")
  static createLbw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
