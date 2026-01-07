import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbk")
export default class LbkController {
  @operation({
    summary: "Get Lbk",
  })
  @get()
  static getLbk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbk",
  })
  @post("{id}")
  static createLbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
