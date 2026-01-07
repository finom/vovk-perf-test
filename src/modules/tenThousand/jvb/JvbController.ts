import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvb")
export default class JvbController {
  @operation({
    summary: "Get Jvb",
  })
  @get()
  static getJvb = procedure({
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
