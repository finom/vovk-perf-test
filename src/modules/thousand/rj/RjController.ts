import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rjs")
export default class RjController {
  @operation({
    summary: "Get Rjs",
  })
  @get()
  static getRjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rj",
  })
  @post("{id}")
  static createRj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
