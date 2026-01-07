import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwe")
export default class JweController {
  @operation({
    summary: "Get Jwe",
  })
  @get()
  static getJwe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwe",
  })
  @post("{id}")
  static createJwe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
