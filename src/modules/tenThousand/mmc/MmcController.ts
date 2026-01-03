import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmcs")
export default class MmcController {
  @operation({
    summary: "Get Mmcs",
  })
  @get()
  static getMmcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmc",
  })
  @post("{id}")
  static createMmc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
