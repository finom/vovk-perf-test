import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jep")
export default class JepController {
  @operation({
    summary: "Get Jep",
  })
  @get()
  static getJep = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jep",
  })
  @post("{id}")
  static createJep = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
