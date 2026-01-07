import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jm")
export default class JmController {
  @operation({
    summary: "Get Jm",
  })
  @get()
  static getJm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jm",
  })
  @post("{id}")
  static createJm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
