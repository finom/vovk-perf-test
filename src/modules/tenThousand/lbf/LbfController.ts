import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbf")
export default class LbfController {
  @operation({
    summary: "Get Lbf",
  })
  @get()
  static getLbf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbf",
  })
  @post("{id}")
  static createLbf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
