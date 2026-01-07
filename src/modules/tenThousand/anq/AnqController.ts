import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anq")
export default class AnqController {
  @operation({
    summary: "Get Anq",
  })
  @get()
  static getAnq = procedure({
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
