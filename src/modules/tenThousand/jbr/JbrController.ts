import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbr")
export default class JbrController {
  @operation({
    summary: "Get Jbr",
  })
  @get()
  static getJbr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbr",
  })
  @post("{id}")
  static createJbr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
