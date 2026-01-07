import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jek")
export default class JekController {
  @operation({
    summary: "Get Jek",
  })
  @get()
  static getJek = procedure({
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
