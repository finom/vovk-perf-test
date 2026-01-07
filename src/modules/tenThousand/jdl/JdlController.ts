import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdl")
export default class JdlController {
  @operation({
    summary: "Get Jdl",
  })
  @get()
  static getJdl = procedure({
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
