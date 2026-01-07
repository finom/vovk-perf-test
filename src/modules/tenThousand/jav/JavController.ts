import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jav")
export default class JavController {
  @operation({
    summary: "Get Jav",
  })
  @get()
  static getJav = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jav",
  })
  @post("{id}")
  static createJav = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
