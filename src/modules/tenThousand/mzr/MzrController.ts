import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzr")
export default class MzrController {
  @operation({
    summary: "Get Mzr",
  })
  @get()
  static getMzr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzr",
  })
  @post("{id}")
  static createMzr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
