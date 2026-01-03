import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnas")
export default class BnaController {
  @operation({
    summary: "Get Bnas",
  })
  @get()
  static getBnas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bna",
  })
  @post("{id}")
  static createBna = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
