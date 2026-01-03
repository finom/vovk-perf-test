import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvbs")
export default class JvbController {
  @operation({
    summary: "Get Jvbs",
  })
  @get()
  static getJvbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvb",
  })
  @post("{id}")
  static createJvb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
