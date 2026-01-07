import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bij")
export default class BijController {
  @operation({
    summary: "Get Bij",
  })
  @get()
  static getBij = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bij",
  })
  @post("{id}")
  static createBij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
