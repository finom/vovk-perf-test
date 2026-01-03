import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpgs")
export default class BpgController {
  @operation({
    summary: "Get Bpgs",
  })
  @get()
  static getBpgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpg",
  })
  @post("{id}")
  static createBpg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
