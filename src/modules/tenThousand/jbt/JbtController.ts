import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbt")
export default class JbtController {
  @operation({
    summary: "Get Jbt",
  })
  @get()
  static getJbt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbt",
  })
  @post("{id}")
  static createJbt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
