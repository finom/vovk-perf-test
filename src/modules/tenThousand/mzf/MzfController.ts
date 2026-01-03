import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzfs")
export default class MzfController {
  @operation({
    summary: "Get Mzfs",
  })
  @get()
  static getMzfs = procedure({
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
