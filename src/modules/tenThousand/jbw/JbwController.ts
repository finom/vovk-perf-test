import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbw")
export default class JbwController {
  @operation({
    summary: "Get Jbw",
  })
  @get()
  static getJbw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbw",
  })
  @post("{id}")
  static createJbw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
