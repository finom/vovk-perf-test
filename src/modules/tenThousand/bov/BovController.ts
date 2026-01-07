import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bov")
export default class BovController {
  @operation({
    summary: "Get Bov",
  })
  @get()
  static getBov = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bov",
  })
  @post("{id}")
  static createBov = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
