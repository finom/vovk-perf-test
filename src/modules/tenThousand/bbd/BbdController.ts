import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbd")
export default class BbdController {
  @operation({
    summary: "Get Bbd",
  })
  @get()
  static getBbd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbd",
  })
  @post("{id}")
  static createBbd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
