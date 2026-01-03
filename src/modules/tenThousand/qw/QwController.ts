import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qws")
export default class QwController {
  @operation({
    summary: "Get Qws",
  })
  @get()
  static getQws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qw",
  })
  @post("{id}")
  static createQw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
