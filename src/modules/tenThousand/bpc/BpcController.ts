import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpcs")
export default class BpcController {
  @operation({
    summary: "Get Bpcs",
  })
  @get()
  static getBpcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpc",
  })
  @post("{id}")
  static createBpc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
