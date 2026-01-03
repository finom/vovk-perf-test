import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpks")
export default class BpkController {
  @operation({
    summary: "Get Bpks",
  })
  @get()
  static getBpks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpk",
  })
  @post("{id}")
  static createBpk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
