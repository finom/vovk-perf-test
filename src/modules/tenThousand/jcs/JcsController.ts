import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcs")
export default class JcsController {
  @operation({
    summary: "Get Jcs",
  })
  @get()
  static getJcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcs",
  })
  @post("{id}")
  static createJcs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
