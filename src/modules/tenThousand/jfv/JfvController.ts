import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfv")
export default class JfvController {
  @operation({
    summary: "Get Jfv",
  })
  @get()
  static getJfv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfv",
  })
  @post("{id}")
  static createJfv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
