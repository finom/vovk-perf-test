import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyns")
export default class JynController {
  @operation({
    summary: "Get Jyns",
  })
  @get()
  static getJyns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyn",
  })
  @post("{id}")
  static createJyn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
