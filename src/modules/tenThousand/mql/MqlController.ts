import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mql")
export default class MqlController {
  @operation({
    summary: "Get Mql",
  })
  @get()
  static getMql = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mql",
  })
  @post("{id}")
  static createMql = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
