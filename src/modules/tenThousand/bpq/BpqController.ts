import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpq")
export default class BpqController {
  @operation({
    summary: "Get Bpq",
  })
  @get()
  static getBpq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpq",
  })
  @post("{id}")
  static createBpq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
