import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpb")
export default class BpbController {
  @operation({
    summary: "Get Bpb",
  })
  @get()
  static getBpb = procedure({
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
