import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhus")
export default class LhuController {
  @operation({
    summary: "Get Lhus",
  })
  @get()
  static getLhus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhu",
  })
  @post("{id}")
  static createLhu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
