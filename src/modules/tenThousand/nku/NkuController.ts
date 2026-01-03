import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkus")
export default class NkuController {
  @operation({
    summary: "Get Nkus",
  })
  @get()
  static getNkus = procedure({
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
