import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jeks")
export default class JekController {
  @operation({
    summary: "Get Jeks",
  })
  @get()
  static getJeks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jek",
  })
  @post("{id}")
  static createJek = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
