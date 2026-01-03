import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvfs")
export default class JvfController {
  @operation({
    summary: "Get Jvfs",
  })
  @get()
  static getJvfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvf",
  })
  @post("{id}")
  static createJvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
