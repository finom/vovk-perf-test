import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jre")
export default class JreController {
  @operation({
    summary: "Get Jre",
  })
  @get()
  static getJre = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jre",
  })
  @post("{id}")
  static createJre = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
