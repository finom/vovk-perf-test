import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkhs")
export default class JkhController {
  @operation({
    summary: "Get Jkhs",
  })
  @get()
  static getJkhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkh",
  })
  @post("{id}")
  static createJkh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
