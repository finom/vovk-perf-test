import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iql")
export default class IqlController {
  @operation({
    summary: "Get Iql",
  })
  @get()
  static getIql = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iql",
  })
  @post("{id}")
  static createIql = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
