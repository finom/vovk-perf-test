import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmas")
export default class FmaController {
  @operation({
    summary: "Get Fmas",
  })
  @get()
  static getFmas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fma",
  })
  @post("{id}")
  static createFma = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
