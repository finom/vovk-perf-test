import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jed")
export default class JedController {
  @operation({
    summary: "Get Jed",
  })
  @get()
  static getJed = procedure({
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
