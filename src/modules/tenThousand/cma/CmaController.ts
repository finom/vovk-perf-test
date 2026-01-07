import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cma")
export default class CmaController {
  @operation({
    summary: "Get Cma",
  })
  @get()
  static getCma = procedure({
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
