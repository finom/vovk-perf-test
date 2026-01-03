import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvxes")
export default class JvxController {
  @operation({
    summary: "Get Jvxes",
  })
  @get()
  static getJvxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvx",
  })
  @post("{id}")
  static createJvx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
