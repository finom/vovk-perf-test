import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzw")
export default class MzwController {
  @operation({
    summary: "Get Mzw",
  })
  @get()
  static getMzw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzw",
  })
  @post("{id}")
  static createMzw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
