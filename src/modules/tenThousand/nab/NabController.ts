import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nab")
export default class NabController {
  @operation({
    summary: "Get Nab",
  })
  @get()
  static getNab = procedure({
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
