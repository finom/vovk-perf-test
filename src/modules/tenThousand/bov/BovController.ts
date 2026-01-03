import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bovs")
export default class BovController {
  @operation({
    summary: "Get Bovs",
  })
  @get()
  static getBovs = procedure({
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
