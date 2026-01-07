import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noj")
export default class NojController {
  @operation({
    summary: "Get Noj",
  })
  @get()
  static getNoj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Noj",
  })
  @post("{id}")
  static createNoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
