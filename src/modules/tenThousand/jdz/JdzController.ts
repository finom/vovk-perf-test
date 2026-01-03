import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdzs")
export default class JdzController {
  @operation({
    summary: "Get Jdzs",
  })
  @get()
  static getJdzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdz",
  })
  @post("{id}")
  static createJdz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
