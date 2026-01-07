import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bn")
export default class BnController {
  @operation({
    summary: "Get Bn",
  })
  @get()
  static getBn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bn",
  })
  @post("{id}")
  static createBn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
