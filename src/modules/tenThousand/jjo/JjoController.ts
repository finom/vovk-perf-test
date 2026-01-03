import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjos")
export default class JjoController {
  @operation({
    summary: "Get Jjos",
  })
  @get()
  static getJjos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjo",
  })
  @post("{id}")
  static createJjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
