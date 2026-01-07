import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nea")
export default class NeaController {
  @operation({
    summary: "Get Nea",
  })
  @get()
  static getNea = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nea",
  })
  @post("{id}")
  static createNea = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
