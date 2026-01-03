import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ceus")
export default class CeuController {
  @operation({
    summary: "Get Ceus",
  })
  @get()
  static getCeus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ceu",
  })
  @post("{id}")
  static createCeu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
