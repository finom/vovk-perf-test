import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jql")
export default class JqlController {
  @operation({
    summary: "Get Jql",
  })
  @get()
  static getJql = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jql",
  })
  @post("{id}")
  static createJql = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
