import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmw")
export default class MmwController {
  @operation({
    summary: "Get Mmw",
  })
  @get()
  static getMmw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmw",
  })
  @post("{id}")
  static createMmw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
