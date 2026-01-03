import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbs")
export default class JbsController {
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
    summary: "Create Jbs",
  })
  @post("{id}")
  static createJbs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
