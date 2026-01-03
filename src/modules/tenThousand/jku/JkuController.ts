import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkus")
export default class JkuController {
  @operation({
    summary: "Get Jkus",
  })
  @get()
  static getJkus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jku",
  })
  @post("{id}")
  static createJku = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
