import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhms")
export default class LhmController {
  @operation({
    summary: "Get Lhms",
  })
  @get()
  static getLhms = procedure({
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
