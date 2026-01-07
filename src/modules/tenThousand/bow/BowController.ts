import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bow")
export default class BowController {
  @operation({
    summary: "Get Bow",
  })
  @get()
  static getBow = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bow",
  })
  @post("{id}")
  static createBow = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
