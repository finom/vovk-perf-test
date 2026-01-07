import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dql")
export default class DqlController {
  @operation({
    summary: "Get Dql",
  })
  @get()
  static getDql = procedure({
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
