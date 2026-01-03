import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgfs")
export default class BgfController {
  @operation({
    summary: "Get Bgfs",
  })
  @get()
  static getBgfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgf",
  })
  @post("{id}")
  static createBgf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
