import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcws")
export default class JcwController {
  @operation({
    summary: "Get Jcws",
  })
  @get()
  static getJcws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcw",
  })
  @post("{id}")
  static createJcw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
