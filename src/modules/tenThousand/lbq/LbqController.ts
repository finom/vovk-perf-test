import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbqs")
export default class LbqController {
  @operation({
    summary: "Get Lbqs",
  })
  @get()
  static getLbqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbq",
  })
  @post("{id}")
  static createLbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
