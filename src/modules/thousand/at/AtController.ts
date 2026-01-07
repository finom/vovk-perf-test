import { procedure, prefix, get, post, operation } from "vovk";

@prefix("at")
export default class AtController {
  @operation({
    summary: "Get At",
  })
  @get()
  static getAt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create At",
  })
  @post("{id}")
  static createAt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
