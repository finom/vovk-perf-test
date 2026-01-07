import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhm")
export default class LhmController {
  @operation({
    summary: "Get Lhm",
  })
  @get()
  static getLhm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhm",
  })
  @post("{id}")
  static createLhm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
