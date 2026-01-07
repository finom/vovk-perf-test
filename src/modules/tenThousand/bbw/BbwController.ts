import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbw")
export default class BbwController {
  @operation({
    summary: "Get Bbw",
  })
  @get()
  static getBbw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbw",
  })
  @post("{id}")
  static createBbw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
