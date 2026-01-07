import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bna")
export default class BnaController {
  @operation({
    summary: "Get Bna",
  })
  @get()
  static getBna = procedure({
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
