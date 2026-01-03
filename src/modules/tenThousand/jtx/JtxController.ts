import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtxes")
export default class JtxController {
  @operation({
    summary: "Get Jtxes",
  })
  @get()
  static getJtxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtx",
  })
  @post("{id}")
  static createJtx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
