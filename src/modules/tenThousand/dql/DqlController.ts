import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqls")
export default class DqlController {
  @operation({
    summary: "Get Dqls",
  })
  @get()
  static getDqls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dql",
  })
  @post("{id}")
  static createDql = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
