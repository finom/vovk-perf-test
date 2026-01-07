import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmh")
export default class MmhController {
  @operation({
    summary: "Get Mmh",
  })
  @get()
  static getMmh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmh",
  })
  @post("{id}")
  static createMmh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
