import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juvs")
export default class JuvController {
  @operation({
    summary: "Get Juvs",
  })
  @get()
  static getJuvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Juv",
  })
  @post("{id}")
  static createJuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
