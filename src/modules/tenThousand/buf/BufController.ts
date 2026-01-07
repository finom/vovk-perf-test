import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buf")
export default class BufController {
  @operation({
    summary: "Get Buf",
  })
  @get()
  static getBuf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Buf",
  })
  @post("{id}")
  static createBuf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
