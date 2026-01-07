import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwd")
export default class BwdController {
  @operation({
    summary: "Get Bwd",
  })
  @get()
  static getBwd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwd",
  })
  @post("{id}")
  static createBwd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
