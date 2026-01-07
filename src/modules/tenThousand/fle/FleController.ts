import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fle")
export default class FleController {
  @operation({
    summary: "Get Fle",
  })
  @get()
  static getFle = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fle",
  })
  @post("{id}")
  static createFle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
