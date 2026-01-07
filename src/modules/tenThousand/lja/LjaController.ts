import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lja")
export default class LjaController {
  @operation({
    summary: "Get Lja",
  })
  @get()
  static getLja = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lja",
  })
  @post("{id}")
  static createLja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
