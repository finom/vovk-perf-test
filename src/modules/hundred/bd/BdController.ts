import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bd")
export default class BdController {
  @operation({
    summary: "Get Bd",
  })
  @get()
  static getBd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bd",
  })
  @post("{id}")
  static createBd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
