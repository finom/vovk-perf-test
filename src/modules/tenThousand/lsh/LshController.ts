import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lshes")
export default class LshController {
  @operation({
    summary: "Get Lshes",
  })
  @get()
  static getLshes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsh",
  })
  @post("{id}")
  static createLsh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
