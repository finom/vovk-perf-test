import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrs")
export default class LrController {
  @operation({
    summary: "Get Lrs",
  })
  @get()
  static getLrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lr",
  })
  @post("{id}")
  static createLr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
