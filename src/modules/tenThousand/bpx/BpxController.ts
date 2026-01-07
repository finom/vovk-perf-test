import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpx")
export default class BpxController {
  @operation({
    summary: "Get Bpx",
  })
  @get()
  static getBpx = procedure({
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
