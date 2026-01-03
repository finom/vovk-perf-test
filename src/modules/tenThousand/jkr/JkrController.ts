import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkrs")
export default class JkrController {
  @operation({
    summary: "Get Jkrs",
  })
  @get()
  static getJkrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkr",
  })
  @post("{id}")
  static createJkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
