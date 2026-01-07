import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkp")
export default class JkpController {
  @operation({
    summary: "Get Jkp",
  })
  @get()
  static getJkp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkp",
  })
  @post("{id}")
  static createJkp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
