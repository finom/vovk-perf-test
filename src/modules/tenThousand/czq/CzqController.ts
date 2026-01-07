import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czq")
export default class CzqController {
  @operation({
    summary: "Get Czq",
  })
  @get()
  static getCzq = procedure({
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
