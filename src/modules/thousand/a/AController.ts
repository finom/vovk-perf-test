import { procedure, prefix, get, post, operation } from "vovk";

@prefix("as")
export default class AController {
  @operation({
    summary: "Get AS",
  })
  @get()
  static getAS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create A",
  })
  @post("{id}")
  static createA = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
