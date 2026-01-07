import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgj")
export default class JgjController {
  @operation({
    summary: "Get Jgj",
  })
  @get()
  static getJgj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgj",
  })
  @post("{id}")
  static createJgj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
