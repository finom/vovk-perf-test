import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfw")
export default class JfwController {
  @operation({
    summary: "Get Jfw",
  })
  @get()
  static getJfw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfw",
  })
  @post("{id}")
  static createJfw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
