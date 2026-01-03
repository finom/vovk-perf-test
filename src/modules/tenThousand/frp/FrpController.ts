import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frps")
export default class FrpController {
  @operation({
    summary: "Get Frps",
  })
  @get()
  static getFrps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frp",
  })
  @post("{id}")
  static createFrp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
