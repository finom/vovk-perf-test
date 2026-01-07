import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvn")
export default class JvnController {
  @operation({
    summary: "Get Jvn",
  })
  @get()
  static getJvn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvn",
  })
  @post("{id}")
  static createJvn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
