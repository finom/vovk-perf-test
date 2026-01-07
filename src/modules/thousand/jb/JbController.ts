import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jb")
export default class JbController {
  @operation({
    summary: "Get Jb",
  })
  @get()
  static getJb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jb",
  })
  @post("{id}")
  static createJb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
