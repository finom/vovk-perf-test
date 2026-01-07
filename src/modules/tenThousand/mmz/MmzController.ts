import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmz")
export default class MmzController {
  @operation({
    summary: "Get Mmz",
  })
  @get()
  static getMmz = procedure({
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
