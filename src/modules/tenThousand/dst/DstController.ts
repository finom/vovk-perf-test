import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsts")
export default class DstController {
  @operation({
    summary: "Get Dsts",
  })
  @get()
  static getDsts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dst",
  })
  @post("{id}")
  static createDst = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
