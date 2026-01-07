import { procedure, prefix, get, post, operation } from "vovk";

@prefix("b")
export default class BController {
  @operation({
    summary: "Get B",
  })
  @get()
  static getB = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create B",
  })
  @post("{id}")
  static createB = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
