import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njfs")
export default class NjfController {
  @operation({
    summary: "Get Njfs",
  })
  @get()
  static getNjfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njf",
  })
  @post("{id}")
  static createNjf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
