import { procedure, prefix, get, post, operation } from "vovk";

@prefix("l")
export default class LController {
  @operation({
    summary: "Get L",
  })
  @get()
  static getL = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create L",
  })
  @post("{id}")
  static createL = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
