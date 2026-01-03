import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlus")
export default class JluController {
  @operation({
    summary: "Get Jlus",
  })
  @get()
  static getJlus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlu",
  })
  @post("{id}")
  static createJlu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
