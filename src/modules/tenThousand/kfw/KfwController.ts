import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfw")
export default class KfwController {
  @operation({
    summary: "Get Kfw",
  })
  @get()
  static getKfw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfw",
  })
  @post("{id}")
  static createKfw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
