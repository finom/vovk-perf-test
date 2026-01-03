import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdvs")
export default class JdvController {
  @operation({
    summary: "Get Jdvs",
  })
  @get()
  static getJdvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdv",
  })
  @post("{id}")
  static createJdv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
