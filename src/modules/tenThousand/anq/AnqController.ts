import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anqs")
export default class AnqController {
  @operation({
    summary: "Get Anqs",
  })
  @get()
  static getAnqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Anq",
  })
  @post("{id}")
  static createAnq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
