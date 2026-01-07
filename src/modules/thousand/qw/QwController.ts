import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qw")
export default class QwController {
  @operation({
    summary: "Get Qw",
  })
  @get()
  static getQw = procedure({
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
