import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czqs")
export default class CzqController {
  @operation({
    summary: "Get Czqs",
  })
  @get()
  static getCzqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czq",
  })
  @post("{id}")
  static createCzq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
