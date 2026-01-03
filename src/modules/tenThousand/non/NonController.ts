import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nons")
export default class NonController {
  @operation({
    summary: "Get Nons",
  })
  @get()
  static getNons = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Non",
  })
  @post("{id}")
  static createNon = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
