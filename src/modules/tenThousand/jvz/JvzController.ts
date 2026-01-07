import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvz")
export default class JvzController {
  @operation({
    summary: "Get Jvz",
  })
  @get()
  static getJvz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvz",
  })
  @post("{id}")
  static createJvz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
