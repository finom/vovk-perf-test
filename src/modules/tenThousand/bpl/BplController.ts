import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpl")
export default class BplController {
  @operation({
    summary: "Get Bpl",
  })
  @get()
  static getBpl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpl",
  })
  @post("{id}")
  static createBpl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
