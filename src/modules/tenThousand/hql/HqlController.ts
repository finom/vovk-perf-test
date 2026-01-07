import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hql")
export default class HqlController {
  @operation({
    summary: "Get Hql",
  })
  @get()
  static getHql = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hql",
  })
  @post("{id}")
  static createHql = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
