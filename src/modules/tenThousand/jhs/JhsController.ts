import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhs")
export default class JhsController {
  @operation({
    summary: "Get Jhs",
  })
  @get()
  static getJhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhs",
  })
  @post("{id}")
  static createJhs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
