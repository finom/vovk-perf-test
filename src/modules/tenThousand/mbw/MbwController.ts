import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbws")
export default class MbwController {
  @operation({
    summary: "Get Mbws",
  })
  @get()
  static getMbws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbw",
  })
  @post("{id}")
  static createMbw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
