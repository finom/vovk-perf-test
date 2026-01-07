import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvx")
export default class JvxController {
  @operation({
    summary: "Get Jvx",
  })
  @get()
  static getJvx = procedure({
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
