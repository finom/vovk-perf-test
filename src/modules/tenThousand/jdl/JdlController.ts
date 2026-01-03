import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdls")
export default class JdlController {
  @operation({
    summary: "Get Jdls",
  })
  @get()
  static getJdls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdl",
  })
  @post("{id}")
  static createJdl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
