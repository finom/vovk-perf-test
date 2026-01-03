import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmas")
export default class MmaController {
  @operation({
    summary: "Get Mmas",
  })
  @get()
  static getMmas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mma",
  })
  @post("{id}")
  static createMma = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
