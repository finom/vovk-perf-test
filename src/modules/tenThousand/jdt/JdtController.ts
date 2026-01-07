import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdt")
export default class JdtController {
  @operation({
    summary: "Get Jdt",
  })
  @get()
  static getJdt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdt",
  })
  @post("{id}")
  static createJdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
