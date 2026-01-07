import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jt")
export default class JtController {
  @operation({
    summary: "Get Jt",
  })
  @get()
  static getJt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jt",
  })
  @post("{id}")
  static createJt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
