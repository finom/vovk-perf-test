import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzq")
export default class MzqController {
  @operation({
    summary: "Get Mzq",
  })
  @get()
  static getMzq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzq",
  })
  @post("{id}")
  static createMzq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
