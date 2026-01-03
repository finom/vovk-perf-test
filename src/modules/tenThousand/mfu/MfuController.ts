import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfus")
export default class MfuController {
  @operation({
    summary: "Get Mfus",
  })
  @get()
  static getMfus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfu",
  })
  @post("{id}")
  static createMfu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
