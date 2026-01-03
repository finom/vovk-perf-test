import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpbs")
export default class BpbController {
  @operation({
    summary: "Get Bpbs",
  })
  @get()
  static getBpbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpb",
  })
  @post("{id}")
  static createBpb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
