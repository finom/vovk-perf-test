import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvp")
export default class JvpController {
  @operation({
    summary: "Get Jvp",
  })
  @get()
  static getJvp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvp",
  })
  @post("{id}")
  static createJvp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
