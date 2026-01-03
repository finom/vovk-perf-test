import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbrs")
export default class JbrController {
  @operation({
    summary: "Get Jbrs",
  })
  @get()
  static getJbrs = procedure({
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
