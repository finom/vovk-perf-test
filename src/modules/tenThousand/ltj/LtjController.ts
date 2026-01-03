import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltjs")
export default class LtjController {
  @operation({
    summary: "Get Ltjs",
  })
  @get()
  static getLtjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltj",
  })
  @post("{id}")
  static createLtj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
