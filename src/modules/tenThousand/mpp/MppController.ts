import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpps")
export default class MppController {
  @operation({
    summary: "Get Mpps",
  })
  @get()
  static getMpps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpp",
  })
  @post("{id}")
  static createMpp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
