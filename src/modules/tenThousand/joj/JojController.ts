import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joj")
export default class JojController {
  @operation({
    summary: "Get Joj",
  })
  @get()
  static getJoj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Joj",
  })
  @post("{id}")
  static createJoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
