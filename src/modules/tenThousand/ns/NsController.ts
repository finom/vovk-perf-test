import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ns")
export default class NsController {
  @operation({
    summary: "Get Ns",
  })
  @get()
  static getNs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ns",
  })
  @post("{id}")
  static createNs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
