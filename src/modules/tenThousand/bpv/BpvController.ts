import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpv")
export default class BpvController {
  @operation({
    summary: "Get Bpv",
  })
  @get()
  static getBpv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpv",
  })
  @post("{id}")
  static createBpv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
