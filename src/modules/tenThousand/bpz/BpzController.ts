import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpz")
export default class BpzController {
  @operation({
    summary: "Get Bpz",
  })
  @get()
  static getBpz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpz",
  })
  @post("{id}")
  static createBpz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
