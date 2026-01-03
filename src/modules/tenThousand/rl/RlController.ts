import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rls")
export default class RlController {
  @operation({
    summary: "Get Rls",
  })
  @get()
  static getRls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rl",
  })
  @post("{id}")
  static createRl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
