import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czzes")
export default class CzzController {
  @operation({
    summary: "Get Czzes",
  })
  @get()
  static getCzzes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czz",
  })
  @post("{id}")
  static createCzz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
