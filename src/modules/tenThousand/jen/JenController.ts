import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jens")
export default class JenController {
  @operation({
    summary: "Get Jens",
  })
  @get()
  static getJens = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jen",
  })
  @post("{id}")
  static createJen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
