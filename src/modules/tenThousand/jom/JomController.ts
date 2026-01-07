import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jom")
export default class JomController {
  @operation({
    summary: "Get Jom",
  })
  @get()
  static getJom = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jom",
  })
  @post("{id}")
  static createJom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
