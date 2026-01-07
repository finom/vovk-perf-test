import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtv")
export default class JtvController {
  @operation({
    summary: "Get Jtv",
  })
  @get()
  static getJtv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtv",
  })
  @post("{id}")
  static createJtv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
