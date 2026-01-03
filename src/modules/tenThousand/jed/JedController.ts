import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jeds")
export default class JedController {
  @operation({
    summary: "Get Jeds",
  })
  @get()
  static getJeds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jed",
  })
  @post("{id}")
  static createJed = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
