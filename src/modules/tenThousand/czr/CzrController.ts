import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czrs")
export default class CzrController {
  @operation({
    summary: "Get Czrs",
  })
  @get()
  static getCzrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czr",
  })
  @post("{id}")
  static createCzr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
