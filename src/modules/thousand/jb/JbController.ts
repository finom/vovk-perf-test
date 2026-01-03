import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbs")
export default class JbController {
  @operation({
    summary: "Get Jbs",
  })
  @get()
  static getJbs = procedure({
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
