import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpxes")
export default class BpxController {
  @operation({
    summary: "Get Bpxes",
  })
  @get()
  static getBpxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpx",
  })
  @post("{id}")
  static createBpx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
