import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mz")
export default class MzController {
  @operation({
    summary: "Get Mz",
  })
  @get()
  static getMz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mz",
  })
  @post("{id}")
  static createMz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
