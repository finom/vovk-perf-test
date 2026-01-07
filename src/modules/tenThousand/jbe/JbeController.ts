import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbe")
export default class JbeController {
  @operation({
    summary: "Get Jbe",
  })
  @get()
  static getJbe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbe",
  })
  @post("{id}")
  static createJbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
