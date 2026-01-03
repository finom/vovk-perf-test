import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ols")
export default class OlController {
  @operation({
    summary: "Get Ols",
  })
  @get()
  static getOls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ol",
  })
  @post("{id}")
  static createOl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
