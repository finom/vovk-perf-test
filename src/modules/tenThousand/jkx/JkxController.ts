import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkx")
export default class JkxController {
  @operation({
    summary: "Get Jkx",
  })
  @get()
  static getJkx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkx",
  })
  @post("{id}")
  static createJkx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
