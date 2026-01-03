import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtms")
export default class JtmController {
  @operation({
    summary: "Get Jtms",
  })
  @get()
  static getJtms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtm",
  })
  @post("{id}")
  static createJtm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
