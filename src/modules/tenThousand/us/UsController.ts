import { procedure, prefix, get, post, operation } from "vovk";

@prefix("us")
export default class UsController {
  @operation({
    summary: "Get Us",
  })
  @get()
  static getUs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Us",
  })
  @post("{id}")
  static createUs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
