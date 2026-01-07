import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbz")
export default class LbzController {
  @operation({
    summary: "Get Lbz",
  })
  @get()
  static getLbz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbz",
  })
  @post("{id}")
  static createLbz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
