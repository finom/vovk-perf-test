import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrg")
export default class JrgController {
  @operation({
    summary: "Get Jrg",
  })
  @get()
  static getJrg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrg",
  })
  @post("{id}")
  static createJrg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
