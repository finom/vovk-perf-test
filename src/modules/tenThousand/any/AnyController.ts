import { procedure, prefix, get, post, operation } from "vovk";

@prefix("any")
export default class AnyController {
  @operation({
    summary: "Get Any",
  })
  @get()
  static getAny = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Any",
  })
  @post("{id}")
  static createAny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
