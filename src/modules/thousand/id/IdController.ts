import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ids")
export default class IdController {
  @operation({
    summary: "Get Ids",
  })
  @get()
  static getIds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Id",
  })
  @post("{id}")
  static createId = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
