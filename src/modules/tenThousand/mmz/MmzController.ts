import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmzs")
export default class MmzController {
  @operation({
    summary: "Get Mmzs",
  })
  @get()
  static getMmzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmz",
  })
  @post("{id}")
  static createMmz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
