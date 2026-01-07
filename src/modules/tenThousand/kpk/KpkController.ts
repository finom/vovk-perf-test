import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpk")
export default class KpkController {
  @operation({
    summary: "Get Kpk",
  })
  @get()
  static getKpk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpk",
  })
  @post("{id}")
  static createKpk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
