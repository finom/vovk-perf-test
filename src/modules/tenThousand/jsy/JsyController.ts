import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsy")
export default class JsyController {
  @operation({
    summary: "Get Jsy",
  })
  @get()
  static getJsy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsy",
  })
  @post("{id}")
  static createJsy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
