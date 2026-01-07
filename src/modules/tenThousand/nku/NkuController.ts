import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nku")
export default class NkuController {
  @operation({
    summary: "Get Nku",
  })
  @get()
  static getNku = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nku",
  })
  @post("{id}")
  static createNku = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
