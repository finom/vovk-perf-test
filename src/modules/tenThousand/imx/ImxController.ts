import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imxes")
export default class ImxController {
  @operation({
    summary: "Get Imxes",
  })
  @get()
  static getImxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imx",
  })
  @post("{id}")
  static createImx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
