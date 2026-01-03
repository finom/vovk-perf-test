import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nabs")
export default class NabController {
  @operation({
    summary: "Get Nabs",
  })
  @get()
  static getNabs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nab",
  })
  @post("{id}")
  static createNab = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
