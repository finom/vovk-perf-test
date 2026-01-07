import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzf")
export default class MzfController {
  @operation({
    summary: "Get Mzf",
  })
  @get()
  static getMzf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzf",
  })
  @post("{id}")
  static createMzf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
