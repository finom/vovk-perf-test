import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtds")
export default class MtdController {
  @operation({
    summary: "Get Mtds",
  })
  @get()
  static getMtds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtd",
  })
  @post("{id}")
  static createMtd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
