import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtm")
export default class JtmController {
  @operation({
    summary: "Get Jtm",
  })
  @get()
  static getJtm = procedure({
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
