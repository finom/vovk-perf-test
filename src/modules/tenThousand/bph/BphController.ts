import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bphs")
export default class BphController {
  @operation({
    summary: "Get Bphs",
  })
  @get()
  static getBphs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bph",
  })
  @post("{id}")
  static createBph = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
