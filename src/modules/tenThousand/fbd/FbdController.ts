import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbd")
export default class FbdController {
  @operation({
    summary: "Get Fbd",
  })
  @get()
  static getFbd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbd",
  })
  @post("{id}")
  static createFbd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
