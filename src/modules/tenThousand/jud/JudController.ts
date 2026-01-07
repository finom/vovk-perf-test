import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jud")
export default class JudController {
  @operation({
    summary: "Get Jud",
  })
  @get()
  static getJud = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jud",
  })
  @post("{id}")
  static createJud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
