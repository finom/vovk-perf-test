import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juy")
export default class JuyController {
  @operation({
    summary: "Get Juy",
  })
  @get()
  static getJuy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Juy",
  })
  @post("{id}")
  static createJuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
