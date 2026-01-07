import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kk")
export default class KkController {
  @operation({
    summary: "Get Kk",
  })
  @get()
  static getKk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kk",
  })
  @post("{id}")
  static createKk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
