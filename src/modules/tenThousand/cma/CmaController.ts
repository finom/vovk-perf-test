import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmas")
export default class CmaController {
  @operation({
    summary: "Get Cmas",
  })
  @get()
  static getCmas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cma",
  })
  @post("{id}")
  static createCma = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
