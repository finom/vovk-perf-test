import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coj")
export default class CojController {
  @operation({
    summary: "Get Coj",
  })
  @get()
  static getCoj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Coj",
  })
  @post("{id}")
  static createCoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
