import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clves")
export default class ClfController {
  @operation({
    summary: "Get Clves",
  })
  @get()
  static getClves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clf",
  })
  @post("{id}")
  static createClf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
