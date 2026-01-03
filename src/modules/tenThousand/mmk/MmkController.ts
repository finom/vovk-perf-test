import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmks")
export default class MmkController {
  @operation({
    summary: "Get Mmks",
  })
  @get()
  static getMmks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmk",
  })
  @post("{id}")
  static createMmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
