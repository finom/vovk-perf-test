import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxp")
export default class KxpController {
  @operation({
    summary: "Get Kxp",
  })
  @get()
  static getKxp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxp",
  })
  @post("{id}")
  static createKxp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
